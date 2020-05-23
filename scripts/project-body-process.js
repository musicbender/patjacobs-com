// privite
const getNodeType = (node, parentType) => {
  return parentType || node.type || 'paragraph';
};

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
            {
              text: leaf.text,
              marks: leaf.marks
            }
          ]
        }, []);
        
      if (!leavesArr || leavesArr.length < 1) return output;

      return [
        ...output,
        {
          contentType: "paragraph",
          text: leavesArr,
        }
      ]
    }, []);
}

// public
export const processRawBody = (input, accumulator = [], parentType) => {
  const nodes = input.object === 'value' ? input.document.nodes : input.nodes;

  return nodes.reduce((output, node, i) => {
      const type = getNodeType(node, parentType);
      let baseOutput = parentType ? [] : output;
      if (!parentType)  console.log('NODE', i, output.length, type);
      if (parentType)  console.log('RECURSIVE', i, output.length, type, parentType, accumulator.length);
      
      switch (type) {
          case 'class':
            return [...baseOutput, ...processRawBody(node, output, node.data.className)]
          case 'paragraph':
            // console.log('paragraph process', node.nodes.length, i);
            return [...baseOutput, ...processParagraph(node)];
          default:            
            return baseOutput;
      }
  }, accumulator);
};