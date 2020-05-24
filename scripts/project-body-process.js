// privite
const getNodeType = (node, parentType) => {
  return parentType || node.type || null;
};

const getMediaText = (node) => {
  if (node.data.altText) return node.data.altText;
  if (node.nodes && node.nodes.length > 0 && node.nodes[0].object === "text") {
    return node.nodes[0].leaves[0].text || null;
  }
}

const processParagraph = (node) => {
  return node.nodes
    .filter(subNode => subNode.object === "text")
    .reduce((output, subNode, i) => {
      const leavesArr = subNode.leaves
        .filter(leaf => leaf.object === "leaf")
        .reduce((leafOutput, leaf) => {

          if (!leaf.text) return leafOutput;

          return [
            ...leafOutput,
            { leaf: leaf.text, marks: leaf.marks }
          ]
        }, []);

      if (!leavesArr || leavesArr.length < 1) return output;

      return [
        ...output,
        { contentType: "paragraph", text: leavesArr }
      ]
    }, []);
}

const processMedia = (node, contentType) => {
  return {
    contentType: contentType || node.type,
    text: getMediaText(node),
    data: node.data,
  }
}

// public
export const processRawBody = (input, accumulator = [], parentType) => {
  const nodes = input.object === 'value' ? input.document.nodes : input.nodes;

  return nodes.reduce((output, node, i) => {
      const type = getNodeType(node, parentType);
      const baseOutput = parentType ? [] : output;
      
      switch (type) {
          case 'class':
            return [...baseOutput, ...processRawBody(node, output, node.data.className)]
          case 'paragraph':
            return [...baseOutput, ...processParagraph(node)];
          case 'image':
          case 'video':
            return [...baseOutput, processMedia(node, type)]
          default:            
            return baseOutput;
      }
  }, accumulator);
};