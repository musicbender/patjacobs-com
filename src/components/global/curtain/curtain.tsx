import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurtainState } from '@actions/global';
import { clearRequestTimeout, requestTimeout } from '@util/shims';
import {
  CurtainOverlay,
  CurtainWrapper,
  InnerBlock,
  LogoOutterWrapper,
  StyledLogo,
} from './styles';
import { CurtainMode } from '@types';
import settings from '@configs/settings.json';
import { createPortal } from 'react-dom';
import { findPartialSum, hasWindow } from '@util/util';
import { usePresence } from 'framer-motion';
import { TransitionDefinition } from 'framer-motion/types/types';

export type Props = {
  durations?: number[];
  speed?: number;
  entrance?: CurtainMode;
  exit?: CurtainMode;
  withLogo?: boolean;
};

const Curtain = ({
  durations = [1, 1, 1],
  entrance = CurtainMode.NONE,
  exit = CurtainMode.BLOCKS,
  withLogo = false,
}: Props): JSX.Element => {
  const rows = 7;
  const columns = settings.gridLines.length;
  const totalBlocks = rows * columns;
  const msMultiplier = 1000;
  const closedTimeout = findPartialSum(durations, 2) * msMultiplier;

  const openTimeoutRef = useRef(null);
  const closingTimeoutRef = useRef(null);
  const closedTimeoutRef = useRef(null);
  const finishedTimeoutRef = useRef(null);
  const [isPresent, safeToRemove] = usePresence();
  const dispatch = useDispatch();

  type CurtainAction = 'entrance' | 'exit';

  useEffect(() => {
    if (!isPresent) setTimeout(safeToRemove, closedTimeout);
  }, [isPresent]);

  useEffect(() => {
    console.log('mount...');
    if (entrance !== CurtainMode.NONE) {
      console.log('opening...');
      dispatch(changeCurtainState('opening'));

      openTimeoutRef.current = requestTimeout(() => {
        console.log('open...');
        dispatch(changeCurtainState('open'));
      }, durations[0] * msMultiplier);
    } else {
      console.log('open because no entrence');
      dispatch(changeCurtainState('open'));
    }

    if (exit !== CurtainMode.NONE) {
      closingTimeoutRef.current = requestTimeout(() => {
        console.log('closing...');
        dispatch(changeCurtainState('closing'));
      }, findPartialSum(durations, 1) * msMultiplier);

      closedTimeoutRef.current = requestTimeout(() => {
        console.log('closed...');
        dispatch(changeCurtainState('closed'));
      }, closedTimeout);
    } else {
      console.log('closed because no exit');
      dispatch(changeCurtainState('closed'));
    }

    finishedTimeoutRef.current = requestTimeout(() => {
      console.log('finished!');
      dispatch(changeCurtainState(null));
    }, closedTimeout + 3000);

    return () => {
      dispatch(changeCurtainState(null));
      clearRequestTimeout(openTimeoutRef.current);
      clearRequestTimeout(closingTimeoutRef.current);
      clearRequestTimeout(closedTimeoutRef.current);
      clearRequestTimeout(finishedTimeoutRef.current);
    };
  }, []);

  const isBlockAction = (mode: CurtainMode): boolean => {
    return mode === CurtainMode.BLOCKS || mode === CurtainMode.REVERSE_BLOCKS;
  };

  const getBlockDuration = (action: CurtainAction, blockDuration: number) => {
    return isBlockAction(action === 'entrance' ? entrance : exit)
      ? blockDuration - totalBlocks / 1000
      : blockDuration - rows / 1000;
  };

  const getBlockTransition = (action: CurtainAction, index?: number): TransitionDefinition => {
    const blockDuration = action === 'entrance' ? durations[0] : durations[2];
    const isRows =
      action === 'entrance' ? entrance === CurtainMode.ROWS : exit === CurtainMode.ROWS;

    let output: TransitionDefinition = {
      duration: getBlockDuration(action, blockDuration),
      ease: 'easeInOut',
    };

    if (isRows && index) {
      output = {
        ...output,
        delay: index / blockDuration / 2,
      };
    }

    return output;
  };

  const renderBlock = (i: number, j: number): JSX.Element => {
    const blockVariants = {
      start: { scaleX: 0, originX: 0 },
      noEntrence: { scaleX: 1, originX: 0 },
      opening: {
        scaleX: 1,
        transition: getBlockTransition('entrance', j),
      },
      closing: {
        scaleX: 0,
        transition: getBlockTransition('exit', j),
      },
    };

    return <InnerBlock variants={blockVariants} key={'curtain-block' + i + '_' + j} />;
  };

  const curtainVariants = {
    opening: {
      transition: {
        staggerChildren: isBlockAction(entrance) ? durations[0] / totalBlocks : 0,
        staggerDirection: entrance === CurtainMode.REVERSE_BLOCKS ? -1 : 1,
      },
    },
    closing: {
      transition: {
        staggerChildren: isBlockAction(exit) ? durations[2] / totalBlocks : 0,
        staggerDirection: exit === CurtainMode.REVERSE_BLOCKS ? -1 : 1,
      },
    },
  };

  return (
    hasWindow() &&
    createPortal(
      <CurtainOverlay>
        <CurtainWrapper
          initial={entrance ? 'start' : 'noEntrence'}
          animate={entrance ? 'opening' : 'noEntrence'}
          exit={'closing'}
          key="curtain-wrapper-123"
          variants={curtainVariants}
        >
          {settings.gridLines.map((g: number, i: number): JSX.Element[] => {
            let blocks: JSX.Element[] = [];

            for (let j = 0; j < rows; j++) {
              blocks = [...blocks, renderBlock(i, j)];
            }

            return blocks;
          })}
        </CurtainWrapper>
        {withLogo && (
          <LogoOutterWrapper>
            <StyledLogo color="aqua" debug={settings.splashScreenDebug} />
          </LogoOutterWrapper>
        )}
      </CurtainOverlay>,
      window.document.body,
    )
  );
};

export default Curtain;
