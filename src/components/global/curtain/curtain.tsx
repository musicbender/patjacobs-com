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

export type Props = {
  durations?: number[];
  speed?: number;
  entrance?: CurtainMode;
  exit?: CurtainMode;
  withLogo?: boolean;
};

const Curtain = ({
  durations = [3, 1, 3],
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

  // dEBUG
  useEffect(() => {
    console.log('isPresent', isPresent);
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
    }, closedTimeout + 2000);

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

  const renderBlock = (i: number, j: number): JSX.Element => {
    const blockVariants = {
      start: { scaleX: 0, originX: 0 },
      noEntrence: { scaleX: 1, originX: 0 },
      opening: {
        scaleX: 1,
        transition: {
          duration: (durations[0] / totalBlocks) * 10,
          ease: 'easeInOut',
          delay: entrance === CurtainMode.ROWS ? j / durations[0] / 2 : 0,
        },
      },
      closing: {
        scaleX: 0,
        transition: {
          duration: (durations[2] / totalBlocks) * 10,
          ease: 'linear',
          delay: exit === CurtainMode.ROWS ? durations[2] - j / durations[2] : 0,
        },
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
    </CurtainOverlay>
  );
};

export default Curtain;
