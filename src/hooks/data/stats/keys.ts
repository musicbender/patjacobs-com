export type HealthQueryKey = ReturnType<typeof statsQueryKeys.health>;

export const statsQueryKeys = {
  base: ['stats'] as const,

  health: () => [[...statsQueryKeys.base, 'health']] as const,
};
