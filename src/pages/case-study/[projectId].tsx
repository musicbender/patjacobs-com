import React, { FC } from 'react';
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
  GetCaseStudyQuery,
} from '@types';
import withCurtain from '@components/hoc/with-curtain';

type Props = {
  projectId: string;
  dehydratedState: DehydratedState;
};

const CaseStudyTemplate: FC<Props> = ({ projectId }) => (
  <Layout>
    <CaseStudy projectId={projectId} />
  </Layout>
);

export default withCurtain(CaseStudyTemplate);

export const processGcmsData = async (projectId: string): Promise<ProcessedGcmsData> => {
  const data: GetCaseStudyQuery = await useGetCaseStudyQuery.fetcher({
    projectId,
  })();

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
    nextProject: getNextProject(data.project.projectId, relatedProjects),
    sections: processSections(data.sections as Section[]),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await useGetAllProjectIdsQuery.fetcher()();
  const paths = data.projects.map(({ projectId }) => ({
    params: { projectId },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<Props>> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useGetSocialLinksQuery.getKey(),
    useGetSocialLinksQuery.fetcher(),
  );

  await queryClient.prefetchQuery(['processed-case-study', params.projectId], () =>
    processGcmsData(params.projectId as string),
  );

  return {
    props: {
      projectId: params.projectId as string,
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
