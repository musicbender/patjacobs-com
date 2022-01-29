// privite
const getNodeType = (node, parentType) => {
  return parentType || node.type || null;
};

const getMediaText = (node) => {
  if (node.altText) {
    return node.altText;
  } else if (node.children && node.children > 0 && !!node.children[0].text) {
    return node.children[0].text || null;
  }

  return null;
};

const getMediaData = (node) => {
  const { children, ...output } = node;
  return output;
};

const processParagraph = (node) => {
  return {
    contentType: 'paragraph',
    text: node.children,
  };
};

const processMedia = (node, contentType) => {
  return {
    contentType: contentType || node.type,
    mediaText: getMediaText(node),
    data: getMediaData(node),
  };
};

// public
export const processRawBody = (input: any, accumulator = [], parentType?: any) => {
  if (!input) return;
  return input.children.reduce((output, node) => {
    const type = getNodeType(node, parentType);
    const baseOutput = parentType ? [] : output;

    switch (type) {
      case 'paragraph':
        return [...baseOutput, processParagraph(node)];
      case 'image':
      case 'video':
        return [...baseOutput, processMedia(node, type)];
      default:
        return baseOutput;
    }
  }, accumulator);
};
