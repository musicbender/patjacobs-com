import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurtainState } from '@actions/global';
import { clearRequestTimeout, requestTimeout } from '@util/shims';
import {
  CurtainOverlay,
  CurtainWrapper,
  Block,
  InnerBlock,
  LogoOutterWrapper,
  StyledLogo,
} from './styles';
import { CurtainMode } from '@types';
import settings from '@configs/settings.json';
import { createPortal } from 'react-dom';
import { findPartialSum, hasWindow } from '@util/util';

type Props = {
  durations?: number[];
  speed?: number;
  entrance?: CurtainMode;
  exit?: CurtainMode;
  withLogo?: boolean;
};

type BlockAction = 'enter' | 'exit';

const Curtain = ({
  durations = [2, 2, 2],
  entrance = CurtainMode.NONE,
  exit = CurtainMode.BLOCKS,
  withLogo = false,
}: Props): JSX.Element => {
  const rows = 7;
  const columns = settings.gridLines.length;
  const msMultiplier = 1000;

  const openTimeoutRef = useRef(null);
  const closingTimeoutRef = useRef(null);
  const closedTimeoutRef = useRef(null);

  const [exiting, setExiting] = useState(false);
  const [closed, setClosed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (entrance !== CurtainMode.NONE) {
      dispatch(changeCurtainState('opening'));

      openTimeoutRef.current = requestTimeout(() => {
        dispatch(changeCurtainState('open'));
      }, durations[0] * msMultiplier);
    } else {
      dispatch(changeCurtainState('open'));
    }

    if (exit !== CurtainMode.NONE) {
      closingTimeoutRef.current = requestTimeout(() => {
        setExiting(true);
        dispatch(changeCurtainState('closing'));
      }, findPartialSum(durations, 1) * msMultiplier);

      closedTimeoutRef.current = requestTimeout(() => {
        dispatch(changeCurtainState('closed'));
        setExiting(false);
        setClosed(true);
      }, findPartialSum(durations, 2) * msMultiplier);
    } else {
      dispatch(changeCurtainState('closed'));
      setClosed(true);
    }

    return () => {
      dispatch(changeCurtainState('closed'));
      clearRequestTimeout(openTimeoutRef.current);
      clearRequestTimeout(closingTimeoutRef.current);
      clearRequestTimeout(closedTimeoutRef.current);
    };
  }, []);

  const getBlockDelay = (i: number, j: number, action: BlockAction): number => {
    let output = 0;
    const baseDelay = 0.055;
    const exitDelay = durations[1];
    const baseDelayOffset = action === 'exit' ? exitDelay : 0;

    switch (true) {
      case action === 'exit' && exit === CurtainMode.BLOCKS:
      case action === 'enter' && entrance === CurtainMode.BLOCKS:
        const max = (columns * rows * baseDelay) / 2;
        output = max - baseDelay * ((i + 1) / 2) * (j + 1);
        break;
      case action === 'exit' && exit === CurtainMode.REVERSE_BLOCKS:
      case action === 'enter' && entrance === CurtainMode.REVERSE_BLOCKS:
        output = baseDelay * i;
        break;
      case action === 'exit' && exit === CurtainMode.ROWS:
      case action === 'enter' && entrance === CurtainMode.ROWS:
        output = baseDelay * (settings.gridLines.length - 1 - j);
        break;
      default:
        output = baseDelay;
    }

    return output + baseDelayOffset;
  };

  const renderBlock = (i: number, j: number): JSX.Element => {
    return (
      <Block key={'curtain-block' + i + '_' + j}>
        {entrance !== CurtainMode.NONE && (
          <InnerBlock
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            exit={{ x: 100 }}
            transition={{
              duration: durations[0],
              delay: getBlockDelay(i, j, 'enter'),
            }}
          />
        )}
        {(entrance !== CurtainMode.NONE && exiting) ||
          (entrance === CurtainMode.NONE && (
            <InnerBlock
              initial={{ x: 0 }}
              animate={{ x: '-110%' }}
              exit={{ x: '-110%' }}
              transition={{
                duration: durations[2],
                delay: getBlockDelay(i, j, 'exit'),
              }}
            />
          ))}
      </Block>
    );
  };

  return hasWindow() && !closed
    ? createPortal(
        <CurtainOverlay>
          <CurtainWrapper>
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
    : null;
};

export default Curtain;
