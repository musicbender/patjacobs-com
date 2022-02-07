import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Home from '@components/pages/home';
// import Modal from '../components/global/modal';
// import Curtain from '../components/global/curtain/curtain';
import { useGetAboutMeSectionQuery, useGetRecentWorkQuery, useGetSkillsQuery } from '@types';
import { dehydrate, QueryClient } from 'react-query';

const Index: FC = () => {
  return <Home />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(useGetAboutMeSectionQuery.getKey(), () =>
    useGetAboutMeSectionQuery.fetcher(),
  );

  await queryClient.prefetchQuery(useGetRecentWorkQuery.getKey(), () =>
    useGetRecentWorkQuery.fetcher(),
  );

  await queryClient.prefetchQuery(useGetSkillsQuery.getKey(), () => useGetSkillsQuery.fetcher());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;

/* <TransitionPortal>
    <Modal>
        <Curtain entrance="full" exit="full" duration={1275} />
    </Modal>
</TransitionPortal> */
