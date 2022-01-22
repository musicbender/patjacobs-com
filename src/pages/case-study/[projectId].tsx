import React from 'react';
import { GetStaticProps } from 'next';
import { gql } from 'graphql-request';
import { processRawBody } from '../../util/project-body-process';
import { getNextProject, getRelatedProjects } from '../../util/projects';
import { gcmsClient } from '../../util/requests';
import CaseStudy from '../../components/pages/case-study';
import { GatsbyLocation } from '../../../types';
import Modal from '../../components/global/modal';
import Curtain from '../../components/global/curtain/curtain';

interface Props {
    project: any;
    relatedProjets: any;
    sections: any;
    mount?: boolean;
    entry?: any;
    exit?: any;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let gcmsRequest;

    // process sections data
    const processSections = sections => {
        let output = {};

        sections.forEach(section => {
            output = {
                ...output,
                [section.sectionId]: section,
            };
        });

        return output;
    };

    const processedProject = {
        ...gcmsRequest.data.gcms.project,
        body: processRawBody(gcmsRequest.data.gcms.project.body.raw),
    };

    const relatedProjects = getRelatedProjects(
        gcmsRequest.data.gcms.project.projectType,
        gcmsRequest.data.gcms.projects
    );

    return {
        props: {
            project: processedProject,
            nextProject: getNextProject(params.projectId, relatedProjects),
            sections: processSections(gcmsRequest.data.gcms.sections),
        },
    };
};

const CaseStudyTemplate = (props: Props) => (
    <>
        {props.entry.state.enabled && (
            <Modal>
                <Curtain entrance="full" exit="full" duration={1275} />
            </Modal>
        )}
        <CaseStudy
            project={props.project}
            nextProject={props.nextProject}
            sections={props.sections}
        />
    </>
);

export default CaseStudyTemplate;

{
    /* <TransitionPortal>
    <Modal>
        <Curtain entrance="full" exit="full" duration={1275} />
    </Modal>
</TransitionPortal> */
}
