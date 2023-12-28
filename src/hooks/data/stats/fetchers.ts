import { QueryFunction } from '@tanstack/react-query';
import { HealthQueryKey } from './keys';

export const makeGetHealthFetch = (): QueryFunction<any, HealthQueryKey> => async () => {};
