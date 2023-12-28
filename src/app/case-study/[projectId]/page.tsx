import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { useGetSocialLinksQuery } from 'src/lib/types';
import CaseStudy from './case-study';

// const processGcmsData = async (projectId: string): Promise<ProcessedGcmsData> => {
//   const data: GetCaseStudyQuery = await useGetCaseStudyQuery.fetcher({
//     projectId,
//   })();

//   const processedProject: ProcessedProject = {
//     ...(data.project as OmitProjectBody),
//     body: processRawBody(data.project.body.raw as GcmsProjectBodyRaw),
//   };

//   const relatedProjects = getRelatedProjects(data.project.projectType, data.projects);

//   // process sections data
//   const processSections = (sections: Section[]): Sections => {
//     let output = {};

//     sections.forEach((section: Section) => {
//       output = {
//         ...output,
//         [section.sectionId]: section,
//       };
//     });

//     return output;
//   };

//   return {
//     project: processedProject,
//     nextProject: getNextProject(data.project.projectId, relatedProjects),
//     sections: processSections(data.sections as Section[]),
//   };
// };

export default async function CaseStudyPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: useGetSocialLinksQuery.getKey(),
    queryFn: useGetSocialLinksQuery.fetcher(),
  });

  // await queryClient.prefetchQuery({
  //   queryKey: ['processed-case-study', params.projectId],
  //   queryFn: () => processGcmsData(params.projectId as string),
  // });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CaseStudy />
    </HydrationBoundary>
  );
}
