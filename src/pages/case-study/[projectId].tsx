import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { processRawBody } from '@util/project-body-process';
import { getNextProject, getRelatedProjects } from '@util/projects';
import CaseStudy from '@components/pages/case-study';
// import Modal from 'components/global/modal';
// import Curtain from 'components/global/curtain/curtain';
import { dehydrate, QueryClient } from 'react-query';
import {
  GcmsProjectBodyRaw,
  OmitProjectBody,
  ProcessedProject,
  ProcessedGcmsData,
  Sections,
  Section,
  useGetAllProjectIdsQuery,
  useGetCaseStudyQuery,
} from '@types';

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

  // process sections data
  const processSections = (sections: Section[]): Sections => {
    let output = {};

    sections.forEach((section: Section) => {
      output = {
        ...output,
        [section.sectionId]: section,
      };
    });

    return output;
  };

  const processGcmsData = async (): Promise<ProcessedGcmsData> => {
    const { data } = await useGetCaseStudyQuery({ projectId: params.projectId as string });

    console.log('processGcmsData', data);

    const processedProject: ProcessedProject = {
      ...(data.project as OmitProjectBody),
      body: processRawBody(data.project.body.raw as GcmsProjectBodyRaw),
    };

    const relatedProjects = getRelatedProjects(data.project.projectType, data.projects);

    return {
      project: processedProject,
      nextProject: getNextProject(params.projectId, relatedProjects),
      sections: processSections(data.sections as Section[]),
    };
  };

  await queryClient.prefetchQuery(
    useGetCaseStudyQuery.getKey({ projectId: params.projectId as string }),
    () => processGcmsData(),
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
