import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import Layout from '@components/layout';
import withCurtain from '@components/hoc/with-curtain';
import { wrapper } from '@store';
import Home from '@components/pages/home';
import {
  useGetAboutMeSectionQuery,
  useGetRecentWorkQuery,
  useGetSkillsQuery,
  useGetSocialLinksQuery,
} from '@types';

const Index: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default withCurtain(Index);

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(() => async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useGetSocialLinksQuery.getKey(),
    useGetSocialLinksQuery.fetcher(),
  );

  await queryClient.prefetchQuery(
    useGetAboutMeSectionQuery.getKey(),
    useGetAboutMeSectionQuery.fetcher(),
  );

  await queryClient.prefetchQuery(useGetRecentWorkQuery.getKey(), useGetRecentWorkQuery.fetcher());
  await queryClient.prefetchQuery(useGetSkillsQuery.getKey(), useGetSkillsQuery.fetcher());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});
