import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import { processRawBody } from '@util/project-body-process';
import { getNextProject, getRelatedProjects } from '@util/projects';
import Layout from '@components/layout';
import CaseStudy from '@components/pages/case-study';
// import Modal from 'components/global/modal';
// import Curtain from 'components/global/curtain/curtain';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import {
  GcmsProjectBodyRaw,
  OmitProjectBody,
  ProcessedProject,
  ProcessedGcmsData,
  Sections,
  Section,
  useGetAllProjectIdsQuery,
  useGetCaseStudyQuery,
  useGetSocialLinksQuery,
} from '@types';

type CaseStudyPageStaticProps = {
  projectId: string | string[];
  dehydratedState: DehydratedState;
};

const CaseStudyTemplate = ({ projectId }) => (
  <Layout>
    {/* {props.entry.state.enabled && (
            <Modal>
                <Curtain entrance="full" exit="full" duration={1275} />
            </Modal>
        )} */}

    <CaseStudy projectId={projectId} />
  </Layout>
);

export default CaseStudyTemplate;

export const processGcmsData = async (projectId: string): Promise<ProcessedGcmsData> => {
  const { data } = await useGetCaseStudyQuery({ projectId });

  const processedProject: ProcessedProject = {
    ...(data.project as OmitProjectBody),
    body: processRawBody(data.project.body.raw as GcmsProjectBodyRaw),
  };

  const relatedProjects = getRelatedProjects(data.project.projectType, data.projects);

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

  return {
    project: processedProject,
    nextProject: getNextProject(projectId, relatedProjects),
    sections: processSections(data.sections as Section[]),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = useGetAllProjectIdsQuery();
  const paths = data.projects.map(({ projectId }) => ({
    params: { projectId },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<CaseStudyPageStaticProps>> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useGetSocialLinksQuery.getKey(),
    useGetSocialLinksQuery.fetcher(),
  );

  await queryClient.prefetchQuery(
    useGetCaseStudyQuery.getKey({ projectId: params.projectId as string }),
    () => useGetCaseStudyQuery.fetcher({ projectId: params.projectId as string }),
  );

  await queryClient.prefetchQuery(['processed-case-study', params.projectId], () =>
    processGcmsData(params.projectId as string),
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
