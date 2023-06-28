import { RelatedProject } from '@types';

export const getRelatedProjects = (type: string, projects: RelatedProject[]): RelatedProject[] => {
  return projects.filter((p: RelatedProject) => p.projectType === type);
};

export const getNextProject = (currentId: string, projects: RelatedProject[]): RelatedProject => {
  const sortedProjects = projects.sort((a: RelatedProject, b: RelatedProject) =>
    a.order < b.order ? -1 : 1,
  );

  const index: number =
    sortedProjects.findIndex((p: RelatedProject) => p.projectId === currentId) + 1;

  if (index < 0) return sortedProjects[0];

  return index >= sortedProjects.length ? sortedProjects[0] : sortedProjects[index];
};
