import React from 'react';
import { ProjectBodyWrapper } from './styles';
import {
    SitePageContextAllProjectsBody,
    SitePageContextAllProjectsBodyRawDocumentNodes,
    // BodyNodeType,
} from '../../../../types';

interface Props {
    body: SitePageContextAllProjectsBody;
}

type Node = SitePageContextAllProjectsBodyRawDocumentNodes;

const projectBody = ({ body }: Props) => {
    const renderNodes = () => {
        // body.raw.document.nodes.map((node: Node) => {
        //     const type: BodyNodeType = getNodeType(node);
        //     // switch (type) {
        //     //     case 'paragraph':
        //     // }
        // });
        return <div></div>;
    };

    return <ProjectBodyWrapper>{body && body.raw && renderNodes()}</ProjectBodyWrapper>;
};

export default projectBody;
