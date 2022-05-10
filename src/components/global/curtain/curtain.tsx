import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { changeCurtainState } from '@actions/global';
import { clearRequestTimeout, requestTimeout } from '@util/shims';
import { CurtainAction, CurtainMode, CurtainType, Store } from '@types';
import { useDispatch } from '@store';
import settings from '@configs/settings.json';
import { createPortal } from 'react-dom';
import { findPartialSum } from '@util/util';
import { usePresence } from 'framer-motion';
import { TransitionDefinition } from 'framer-motion/types/types';
import { useMounted } from 'src/hooks/use-mounted';
import {
  CurtainOverlay,
  CurtainWrapper,
  InnerBlock,
  LogoOutterWrapper,
  StyledLogo,
} from './styles';

export type Props = {
  durations?: number[];
  coverMode?: CurtainMode;
  uncoverMode?: CurtainMode;
  curtainType?: CurtainType;
};

const Curtain = ({
  durations = [1, 1, 1],
  coverMode = CurtainMode.NONE,
  uncoverMode = CurtainMode.BLOCKS,
  curtainType = CurtainType.PAGE_TRANSITION,
}: Props): JSX.Element => {
  const rows = 7;
  const columns = settings.gridLines.length;
  const totalBlocks = rows * columns;
  const msMultiplier = 1000;
  const uncoveredTimeout = findPartialSum(durations, 2) * msMultiplier;
  const finishTimeout = uncoveredTimeout + 3000;

  const coveredTimeoutRef = useRef(null);
  const uncoveredTimeoutRef = useRef(null);
  const finishedTimeoutRef = useRef(null);
  const splashActive = useSelector((state: Store) => state.global.splashActive);
  const [isPresent, safeToRemove] = usePresence();
  const { inClient, isMounted } = useMounted();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPresent && curtainType === CurtainType.PAGE_TRANSITION) {
      dispatch(changeCurtainState('covering'));

      if (coverMode !== CurtainMode.NONE) {
        coveredTimeoutRef.current = requestTimeout(() => {
          dispatch(changeCurtainState('covered'));
        }, durations[0] * msMultiplier);
      }

      setTimeout(() => {
        safeToRemove();
      }, durations[1] * msMultiplier);
    }

    if (!isPresent && curtainType === CurtainType.SCROLL) {
      dispatch(changeCurtainState('uncovering'));

      coveredTimeoutRef.current = requestTimeout(() => {
        dispatch(changeCurtainState('uncovered'));
      }, durations[0] * msMultiplier);

      setTimeout(() => {
        safeToRemove();
      }, durations[1] * msMultiplier);
    }
  }, [isPresent]);

  useEffect(() => {
    if (!splashActive && curtainType === CurtainType.PAGE_TRANSITION) {
      if (coverMode === CurtainMode.NONE) {
        dispatch(changeCurtainState('covered'));
      }

      if (uncoverMode !== CurtainMode.NONE) {
        dispatch(changeCurtainState('uncovering'));

        uncoveredTimeoutRef.current = requestTimeout(() => {
          dispatch(changeCurtainState('uncovered'));
        }, durations[2] * msMultiplier);
      } else {
        dispatch(changeCurtainState('uncovered'));
      }

      finishedTimeoutRef.current = requestTimeout(() => {
        dispatch(changeCurtainState(null));
      }, finishTimeout);
    }

    if (curtainType === CurtainType.SPLASH && splashActive) {
      dispatch(changeCurtainState('covered'));

      uncoveredTimeoutRef.current = requestTimeout(() => {
        dispatch(changeCurtainState('uncovering'));
      }, durations[1] * msMultiplier);

      uncoveredTimeoutRef.current = requestTimeout(() => {
        dispatch(changeCurtainState('uncovered'));
      }, (durations[1] + durations[2]) * msMultiplier);
    }

    return () => {
      clearRequestTimeout(coveredTimeoutRef.current);
      clearRequestTimeout(uncoveredTimeoutRef.current);
      clearRequestTimeout(finishedTimeoutRef.current);
    };
  }, []);

  const isBlockAction = (mode: CurtainMode): boolean => {
    return mode === CurtainMode.BLOCKS || mode === CurtainMode.REVERSE_BLOCKS;
  };

  const getBlockDuration = (action: CurtainAction, blockDuration: number) => {
    return isBlockAction(action === 'cover' ? coverMode : uncoverMode)
      ? blockDuration - totalBlocks / msMultiplier
      : blockDuration - rows / msMultiplier;
  };

  const getBlockTransition = (action: CurtainAction, index?: number): TransitionDefinition => {
    const blockDuration = action === 'cover' ? durations[0] : durations[2];
    const isRows =
      action === 'cover' ? coverMode === CurtainMode.ROWS : uncoverMode === CurtainMode.ROWS;

    let output: TransitionDefinition = {
      duration: getBlockDuration(action, blockDuration),
      ease: 'easeInOut',
    };

    if (isRows && index) {
      output = {
        ...output,
        delay: (curtainType === CurtainType.SPLASH ? durations[1] : 0) + index / blockDuration / 2,
      };
    }

    return output;
  };

  const renderBlock = (i: number, j: number): JSX.Element => {
    const blockVariants = {
      start: { scaleX: 1, originX: 0 },
      startsCovered: { scaleX: 1, originX: 1 },
      startUncovered: { scaleX: 0, originX: 0 },
      uncover: {
        scaleX: 0,
        transition: getBlockTransition('uncover', j),
      },
      cover: {
        scaleX: 1,
        transition: getBlockTransition('cover', j),
      },
    };

    return <InnerBlock variants={blockVariants} key={'curtain_block' + i + '_' + j} />;
  };

  const getFramerProps = () => {
    switch (curtainType) {
      case CurtainType.PAGE_TRANSITION:
        return {
          initial: uncoverMode !== CurtainMode.NONE ? 'start' : 'startsCovered',
          animate: uncoverMode !== CurtainMode.NONE ? 'uncover' : 'startsCovered',
          exit: 'cover',
          key: 'page_curtain_wrapper',
        };
      case CurtainType.SPLASH:
        return {
          initial: 'startsCovered',
          animate: uncoverMode !== CurtainMode.NONE ? 'uncover' : 'startsCovered',
          exit: 'cover',
          key: 'splash_curtain_wrapper',
        };
      case CurtainType.SCROLL:
        return {
          initial: uncoverMode !== CurtainMode.NONE ? 'startUncovered' : 'startsCovered',
          animate: uncoverMode !== CurtainMode.NONE ? 'cover' : 'startsCovered',
          exit: 'uncover',
          key: 'scroll_curtain_wrapper',
        };
    }
  };

  const curtainVariants = {
    cover: {
      transition: {
        staggerChildren: isBlockAction(coverMode) ? durations[0] / totalBlocks : 0,
        staggerDirection: coverMode === CurtainMode.REVERSE_BLOCKS ? -1 : 1,
      },
    },
    uncover: {
      transition: {
        delayChildren: curtainType === CurtainType.SPLASH ? durations[1] : null,
        staggerChildren: isBlockAction(uncoverMode) ? durations[2] / totalBlocks : 0,
        staggerDirection: uncoverMode === CurtainMode.REVERSE_BLOCKS ? -1 : 1,
      },
    },
  };

  const curtain: JSX.Element = (
    <CurtainOverlay>
      <CurtainWrapper {...getFramerProps()} variants={curtainVariants}>
        {settings.gridLines.map((g: number, i: number): JSX.Element[] => {
          let blocks: JSX.Element[] = [];

          for (let j = 0; j < rows; j++) {
            blocks = [...blocks, renderBlock(i, j)];
          }

          return blocks;
        })}
      </CurtainWrapper>
      {curtainType === CurtainType.SPLASH && (
        <LogoOutterWrapper>
          <StyledLogo color="aqua" debug={settings.splashScreenDebug} />
        </LogoOutterWrapper>
      )}
    </CurtainOverlay>
  );

  return inClient ? createPortal(curtain, window.document.body) : curtain;
};

export default Curtain;
