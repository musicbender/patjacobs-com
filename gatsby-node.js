const path = require('path');

//* *******************************************//
// --//--//--// GATSBY NODE CONFIG //--//--//--//
//* *******************************************//
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
