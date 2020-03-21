const path = require('path');
const fs = require('fs');

// Utils
const createNewNode = (id, srcPath, gatsbyFuncs) => {
  const data = require(path.resolve(__dirname, srcPath));

  const nodeMeta = {
    id: gatsbyFuncs.createNodeId(id),
    parent: null,
    children: [],
    internal: {
      type: id,
      content: JSON.stringify(data),
      contentDigest: gatsbyFuncs.createContentDigest(data)
    },
    data
  }

  const node = Object.assign({}, data, nodeMeta)
  gatsbyFuncs.createNode(node);
}

//********************************************//
//--//--//--// GATSBY NODE CONFIG //--//--//--//
//********************************************//
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  return new Promise((resolve, reject) => {
    const { createNode } = actions;

    //--//--//--// Create Static Data Nodes //--//--//--//
    (function() {
      const gatsbyFuncs = {
        createNode,
        createNodeId,
        createContentDigest,
      }

      createNewNode('configs', './data/configs', gatsbyFuncs);
      createNewNode('projects', './data/projects', gatsbyFuncs);
      createNewNode('skills', './data/skills', gatsbyFuncs);
      resolve();
    })();
  });
}

// exports.createPages = ({ graphql, actions }) => {
//   return new Promise((resolve, reject) => {
//     const { createPage, createRedirect } = actions;
//     graphql(
//       `
//         query {
//           configs {

//           }
//         }
//       `
//     )
//     .then((result) => {
//       if (result.errors) {
//         reject(result.errors);
//       }
//       // created pages here
//       resolve();
//     })
//     .catch(reject);
//   });
// }
