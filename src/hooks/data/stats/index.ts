import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';

import { DEFAULT_RQ_CONFIG } from '@constants/react-query';

import { makeGetHealthFetch } from './fetchers';
import { HealthQueryKey } from './keys';

export * from './fetchers';
export * from './keys';

export const useHealthQuery = (
  queryKey: HealthQueryKey,
  config?: Omit<UseQueryOptions<any, unknown, any, HealthQueryKey>, 'queryKey' | 'queryFn'>,
): UseQueryResult<any, unknown> => {
  const fetcher = makeGetHealthFetch();
  return useQuery({
    queryKey,
    queryFn: fetcher,
    ...DEFAULT_RQ_CONFIG,
    ...config,
  });
};
