import { RelatedProject } from '@types';

export const getRelatedProjects = (type: string, projects: RelatedProject[]): RelatedProject[] => {
  return projects.filter(p => p.projectType === type);
};

export const getNextProject = (currentId: string, projects: RelatedProject[]): RelatedProject => {
  const index: number = projects.findIndex(p => p.id === currentId) + 1;
  return index >= projects.length ? projects[0] : projects[index];
};
