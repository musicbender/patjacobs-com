const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd(), true);

module.exports = {
  overwrite: true,
  schema: {
    [process.env.GCMS_ENDPOINT]: {
      headers: {
        Authorization: `Bearer ${process.env.GCMS_TOKEN}`,
      },
    },
  },
  documents: 'src/**/*.graphql',
  generates: {
    'src/types/graphcms-schema.d.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        'fragment-matcher',
      ],
      config: {
        fetcher: {
          endpoint: process.env.GCMS_ENDPOINT,
          fetchParams: {
            headers: {
              Authorization: `Bearer ${process.env.GCMS_TOKEN}`,
            },
          },
        },
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};
