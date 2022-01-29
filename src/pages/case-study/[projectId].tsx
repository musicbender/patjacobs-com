import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { processRawBody } from '../../util/project-body-process';
import { getNextProject, getRelatedProjects } from '../../util/projects';
import CaseStudy from '../../components/pages/case-study';
import { useGetAllProjectIdsQuery, useGetCaseStudyQuery } from '../../../types/graphcms-schema';
// import Modal from '../../components/global/modal';
// import Curtain from '../../components/global/curtain/curtain';
import { dehydrate, QueryClient } from 'react-query';

const CaseStudyTemplate = ({ projectId }) => (
  <>
    {/* {props.entry.state.enabled && (
            <Modal>
                <Curtain entrance="full" exit="full" duration={1275} />
            </Modal>
        )} */}
    <CaseStudy projectId={projectId} />
  </>
);

export default CaseStudyTemplate;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = useGetAllProjectIdsQuery();
  const paths = data.projects.map(({ projectId }) => ({
    params: { projectId },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const processGcmsData = async () => {
    const { data } = useGetCaseStudyQuery({ projectId: params.projectId as string });

    // process sections data
    const processSections = (sections) => {
      let output = {};

      sections.forEach((section) => {
        output = {
          ...output,
          [section.sectionId]: section,
        };
      });

      return output;
    };

    const processedProject = {
      ...data.project,
      body: processRawBody(data.project.body.raw),
    };

    const relatedProjects = getRelatedProjects(data.project.projectType, data.projects);

    return {
      project: processedProject,
      nextProject: getNextProject(params.projectId, relatedProjects),
      sections: processSections(data.sections),
    };
  };

  await queryClient.prefetchQuery(
    useGetCaseStudyQuery.getKey({ projectId: params.projectId as string }),
    processGcmsData,
  );

  return {
    props: {
      projectId: params.projectId,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

{
  /* <TransitionPortal>
    <Modal>
        <Curtain entrance="full" exit="full" duration={1275} />
    </Modal>
</TransitionPortal> */
}
