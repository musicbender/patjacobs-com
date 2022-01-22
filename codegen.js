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
        'types/graphcms-schema.d.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
                'fragment-matcher',
            ],
        },
    },
    hooks: {
        afterAllFileWrite: ['prettier --write'],
    },
};
