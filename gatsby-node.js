const path = require('path');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    return new Promise(resolve => {
        const { createNode } = actions;

        // --//--//--// Create Configs Data Nodes //--//--//--//
        (function() {
            const data = require(path.resolve(__dirname, './data/configs'));
            const id = 'configs';

            const nodeMeta = {
                id: createNodeId(id),
                parent: null,
                children: [],
                internal: {
                    type: id,
                    content: JSON.stringify(data),
                    contentDigest: createContentDigest(data),
                },
                data,
            };

            const node = Object.assign({}, data, nodeMeta);
            createNode(node);
        })();

        resolve();
    });
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;
    let query;

    // Create Case study pages
    try {
        query = await graphql(`
            query {
                gcms {
                    sections(where: { sectionId_contains: "case-study-" }) {
                        sectionId
                        heading
                    }
                    projects(where: { disabled: false, status: PUBLISHED, linkType: Case_Study }) {
                        updatedAt
                        createdAt
                        id
                        projectId
                        title
                        projectType
                        imageDesktop {
                            fileName
                            height
                            width
                        }
                        description
                        techList
                        externalUrl
                        body {
                            html
                        }
                    }
                }
            }
        `);
    } catch (err) {
        throw new Error(err);
    }

    // create case study pages
    query.data.gcms.projects.forEach(project => {
        createPage({
            path: `/case-studies/${project.projectId}`,
            component: path.resolve('./src/components/templates/case-study.tsx'),
            context: {
                project,
                allProjects: query.data.gcms.projects,
                sections: query.data.gcms.sections,
            },
        });
    });

    // redirect for /case-studies/
    createRedirect({
        fromPath: '/case-studies/',
        toPath: query.data.gcms.projects
            ? `/case-studies/${query.data.gcms.projects[0].projectId}`
            : '/',
        redirectInBrowser: true,
        isPermanent: true,
    });
};
