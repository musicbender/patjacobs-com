const path = require('path');
const fs = require('fs');

//********************************************//
//--//--//--// GATSBY NODE CONFIG //--//--//--//
//********************************************//
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  return new Promise((resolve, reject) => {
    const { createNode } = actions;

    //--//--//--// Create Configs Data Nodes //--//--//--//
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
          contentDigest: createContentDigest(data)
        },
        data
      }

      const node = Object.assign({}, data, nodeMeta);
      createNode(node);
    })();

    //--//--//--// Create Projects Data Nodes //--//--//--//
    (function () {
      const data = require(path.resolve(__dirname, './data/projects'));
      const id = 'projects';

      data.forEach((project) => {
        const {
          id: projectId,
          title,
          type,
          imageDesktop,
          imageMobile,
          description,
          disabled,
          techList,
          url,
          content,
        } = project

        const node = {
          id: createNodeId(`project-${projectId}`),
          projectId,
          title,
          type,
          imageDesktop,
          imageMobile,
          description,
          disabled,
          techList,
          url,
          content,
          internal: {
            type: id,
            content: JSON.stringify(data),
            contentDigest: createContentDigest(data)
          },
        }

        createNode(node);
      });
    })();

     //--//--//--// Create Skills Data Nodes //--//--//--//
     (function () {
      const data = require(path.resolve(__dirname, './data/skills'));
      const id = 'skills';
      
      const nodeMeta = {
        id: createNodeId(id),
        parent: null,
        children: [],
        ...data,
        internal: {
          type: id,
          content: JSON.stringify(data),
          contentDigest: createContentDigest(data)
        },
      }

      const node = Object.assign({}, data, nodeMeta);
      createNode(node);
    })();

    resolve();
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
