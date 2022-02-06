import { GcmsProjectBodyNode, GcmsProjectBodyRaw, ProjectBodyItem } from '../../types';

const getMediaText = (node: GcmsProjectBodyNode): string | null => {
  if (node.altText) {
    return node.altText;
  } else if (node.children && node.children.length && !!node.children[0].text) {
    return node.children[0].text || null;
  }

  return null;
};

const getMediaData = (node: GcmsProjectBodyNode): ProjectBodyItem => {
  const { children, ...output } = node;
  return output as ProjectBodyItem;
};

const processParagraph = (node: GcmsProjectBodyNode): ProjectBodyItem => {
  return {
    type: 'paragraph',
    text: node.children as string & GcmsProjectBodyNode[],
  };
};

const processMedia = (node: GcmsProjectBodyNode): ProjectBodyItem => {
  return {
    type: node.type,
    mediaText: getMediaText(node),
    ...getMediaData(node),
  };
};

// public
export const processRawBody = (input: GcmsProjectBodyRaw): ProjectBodyItem[] => {
  if (!input) return;
  return input.children.reduce((output: ProjectBodyItem[], node: GcmsProjectBodyNode) => {
    switch (node.type) {
      case 'paragraph':
        return [...output, processParagraph(node)];
      case 'image':
      case 'video':
        return [...output, processMedia(node)];
      default:
        return output;
    }
  }, [] as ProjectBodyItem[]);
};
