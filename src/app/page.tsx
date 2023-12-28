import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import {
  useGetAboutMeSectionQuery,
  useGetRecentWorkQuery,
  useGetSkillsQuery,
  useGetSocialLinksQuery,
} from 'src/lib/types';
import Home from './home';

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: useGetSocialLinksQuery.getKey(),
    queryFn: useGetSocialLinksQuery.fetcher(),
  });

  await queryClient.prefetchQuery({
    queryKey: useGetAboutMeSectionQuery.getKey(),
    queryFn: useGetAboutMeSectionQuery.fetcher(),
  });

  await queryClient.prefetchQuery({
    queryKey: useGetRecentWorkQuery.getKey(),
    queryFn: useGetRecentWorkQuery.fetcher(),
  });

  await queryClient.prefetchQuery({
    queryKey: useGetSkillsQuery.getKey(),
    queryFn: useGetSkillsQuery.fetcher(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
}
