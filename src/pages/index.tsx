import React from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import Home from '../components/pages/home';
import Modal from '../components/global/modal';
import Curtain from '../components/global/curtain/curtain';

interface IProps {
    location: {
        pathname: string;
    };
    entry: any;
}

const Index: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <>
            {props.entry.state.enabled && (
                <Modal>
                    <Curtain entrance="full" exit="full" duration={1275} />
                </Modal>
            )}
            <Home />
        </>
    );
};

export default Index;

{
    /* <TransitionPortal>
    <Modal>
        <Curtain entrance="full" exit="full" duration={1275} />
    </Modal>
</TransitionPortal> */
}
