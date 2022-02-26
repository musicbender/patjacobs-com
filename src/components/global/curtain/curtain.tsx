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
import { CurtainTypes } from '@types';
import settings from '@configs/settings.json';
import { createPortal } from 'react-dom';
import { findPartialSum, hasWindow } from '@util/util';

type Props = {
  durations?: number[];
  speed?: number;
  entrance?: keyof typeof CurtainTypes;
  exit?: keyof typeof CurtainTypes;
  withLogo?: boolean;
};

const Curtain = ({
  durations = [2, 2, 2],
  speed = 1,
  entrance = 'none',
  exit = 'blocks',
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
    dispatch(changeCurtainState('opening'));

    openTimeoutRef.current = requestTimeout(() => {
      dispatch(changeCurtainState('open'));
    }, durations[0] * msMultiplier);

    closingTimeoutRef.current = requestTimeout(() => {
      setExiting(true);
      dispatch(changeCurtainState('closing'));
    }, (durations[0] + durations[1]) * msMultiplier);

    closedTimeoutRef.current = requestTimeout(() => {
      dispatch(changeCurtainState('closed'));
      setClosed(true);
    }, (durations[0] + durations[1] + durations[2]) * msMultiplier);

    return () => {
      dispatch(changeCurtainState('closed'));
      clearRequestTimeout(openTimeoutRef.current);
      clearRequestTimeout(closingTimeoutRef.current);
      clearRequestTimeout(closedTimeoutRef.current);
    };
  }, []);

  const getBlockDelay = (i: number, j: number, action: 'enter' | 'exit'): number => {
    const baseDelay = 0.055;
    switch (true) {
      case action === 'exit' && exit === 'blocks':
      case action === 'enter' && entrance === 'blocks':
        const max = (columns * rows * baseDelay) / 2;
        return max - baseDelay * ((i + 1) / 2) * (j + 1);
      case action === 'exit' && exit === 'reverse-blocks':
      case action === 'enter' && entrance === 'reverse-blocks':
        return baseDelay * i;
      case action === 'exit' && exit === 'rows':
      case action === 'enter' && entrance === 'rows':
        return baseDelay * (settings.gridLines.length - 1 - j);
      default:
        return baseDelay;
    }
  };

  const renderBlock = (i: number, j: number): JSX.Element => {
    console.log('block', i, j, findPartialSum(durations, 1) + getBlockDelay(i, j, 'exit'));
    return (
      <Block key={'splash-block' + i + '_' + j}>
        {entrance !== 'none' && (
          <InnerBlock
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            exit={{ x: 100 }}
            transition={{
              duration: speed,
              delay: getBlockDelay(i, j, 'enter'),
            }}
          />
        )}
        {exit !== 'none' && (
          <InnerBlock
            initial={{ x: 0 }}
            animate={{ x: '-110%' }}
            exit={{ x: '-110%' }}
            transition={{
              duration: speed,
              delay: findPartialSum(durations, 1) + getBlockDelay(i, j, 'exit'),
            }}
          />
        )}
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
