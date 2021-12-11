const path = require('path');
const { getRelatedProjects, getNextProject } = require('./scripts/gatsby-node-utils');
const { processRawBody } = require('./scripts/project-body-process');

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

    // create case study pages
    try {
        query = await graphql(`
            query {
                configs {
                    settings {
                        gridLines
                    }
                }
                gcms {
                    sections(where: { sectionId_contains: "case-study-" }) {
                        sectionId
                        heading
                    }
                    projects(where: { disabled: false, linkType: Case_Study }) {
                        updatedAt
                        createdAt
                        id
                        projectId
                        title
                        projectType
                        description
                        techList
                        externalUrl
                        overview
                        lastDeployedOn
                        projectPublishDate
                        storybookUrl
                        order
                        githubRepoUrl
                        team
                        imageDesktop {
                            fileName
                            height
                            width
                        }
                        body {
                            raw
                        }
                    }
                }
            }
        `);
    } catch (err) {
        throw new Error(err);
    }

    // process sections data
    const processSections = sections => {
        let output = {};

        sections.forEach(section => {
            output = {
                ...output,
                [section.sectionId]: section,
            };
        });

        return output;
    };

    // process projects data
    const processedProjects = query.data.gcms.projects.map(project => {
        return {
            ...project,
            body: processRawBody(project.body.raw),
        };
    });

    const relatedProjectCache = {};

    // create case study pages
    processedProjects.forEach(project => {
        const type = project.projectType;
        const relatedProjects =
            relatedProjectCache[type] || getRelatedProjects(type, processedProjects);

        createPage({
            path: `/case-studies/${project.projectId}`,
            component: path.resolve('./src/components/templates/case-study.tsx'),
            context: {
                project,
                nextProject: getNextProject(project.id, relatedProjects),
                sections: processSections(query.data.gcms.sections),
                configs: query.data.configs,
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
