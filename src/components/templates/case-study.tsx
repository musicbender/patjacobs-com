import React from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import CaseStudy from '../pages/case-study';
import { GatsbyLocation } from '../../../types';
import Modal from '../global/modal';
import Curtain from '../global/curtain/curtain';

interface Props {
    pageContext: any;
    location: GatsbyLocation;
    mount?: boolean;
    entry?: any;
    exit?: any;
}

const CaseStudyTemplate = (props: Props) => (
    <>
        {props.entry.state.enabled && (
            <TransitionPortal>
                <Modal>
                    <Curtain entrance="full" exit="full" duration={1275} />
                </Modal>
            </TransitionPortal>
        )}
        <CaseStudy
            project={props.pageContext.project}
            nextProject={props.pageContext.nextProject}
            sections={props.pageContext.sections}
            configs={props.pageContext.configs}
            location={props.location}
        />
    </>
);

export default CaseStudyTemplate;
