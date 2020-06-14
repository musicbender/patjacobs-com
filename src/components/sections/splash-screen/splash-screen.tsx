import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import Curtain from '../../global/curtain';
import { changeSplashClosing } from '../../../actions/global';
import { SplashScreenWrapper, LogoOutterWrapper, StyledLogo } from './styles';

const SplashScreen: React.SFC = () => {
    const splashDuration = 3000;
    const dispatch = useDispatch();
    const data = useStaticQuery(graphql`
        query {
            configs {
                settings {
                    splashScreenDebug
                }
            }
        }
    `);

    useEffect(() => {
        return () => {
            dispatch(changeSplashClosing(false));
        };
    });

    return (
        <SplashScreenWrapper>
            <Curtain
                duration={data.configs.settings.splashScreenDebug ? 3000000 : splashDuration}
                onClosing={useCallback(() => dispatch(changeSplashClosing(true)), [dispatch])}
            />
            <LogoOutterWrapper>
                <StyledLogo color="aqua" debug={data.configs.settings.splashScreenDebug} />
            </LogoOutterWrapper>
        </SplashScreenWrapper>
    );
};

export default SplashScreen;
