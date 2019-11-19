const path = require('path');
const fs = require('fs');

//********************************************//
//--//--//--// GATSBY NODE CONFIG //--//--//--//
//********************************************//
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  return new Promise((resolve, reject) => {
    const { createNode } = actions;

    //--//--//--// Create Static Data Nodes //--//--//--//
    (function() {
      const staticData = require('./data');
      const id = 'staticData';
      const data = staticData;

      const nodeMeta = {
        id: createNodeId(id),
        parent: null,
        children: [],
        internal: {
          type: id,
          content: JSON.stringify(data),
          contentDigest: createContentDigest(data)
        },
        data
      }

      const node = Object.assign({}, data, nodeMeta)
      createNode(node);
    })();
  });
}

// exports.createPages = ({ graphql, actions }) => {
//   return new Promise((resolve, reject) => {
//     const { createPage, createRedirect } = actions;
//     graphql(
//       `
//         query {
//           staticData {

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
