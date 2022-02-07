import React from 'react';
import { GetStaticProps } from 'next';
import Home from '../components/pages/home';
// import Modal from '../components/global/modal';
// import Curtain from '../components/global/curtain/curtain';
import { useGetHomeContentQuery } from '../types/graphcms-schema';

type Props = {};

const Index: React.FunctionComponent<Props> = () => {
  return (
    <>
      {/* {(
                <Modal>
                    <Curtain entrance="full" exit="full" duration={1275} />
                </Modal>
            )} */}
      <Home />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = useGetHomeContentQuery();
  return {
    props: {
      gcmsData: data,
    },
  };
};

export default Index;

/* <TransitionPortal>
    <Modal>
        <Curtain entrance="full" exit="full" duration={1275} />
    </Modal>
</TransitionPortal> */
