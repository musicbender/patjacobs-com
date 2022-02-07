import React from 'react';
import styled from 'styled-components';
import ProjectMeta from './project-meta';
import theme from '../../../styles/theme';
import { SitePageContextProject } from '../../../types';

// mock project data
const baseProject = {
  id: '123',
  externalUrl: 'https://bladeandsoul.com',
  lastDeployedOn: '7/12/2019',
  projectPublishDate: '2/12/2016',
  projectType: 'Work',
  stage: 'PUBLISHED',
  updatedAt: '',
  createdAt: '',
  projectId: 'blade-and-soul',
  title: 'Blade and Soul',
  techList: [],
  team: [],
};

const project = {
  externalUrl: 'https://bladeandsoul.com',
  lastDeployedOn: '7/12/2019',
  projectPublishDate: '2/12/2016',
  projectType: 'Work',
};

// decorator styled
const Decorator = styled.div`
  position: absolute;
  top: 5em;
  left: ${`${theme.gridSizes.s}%`};
  width: ${`${theme.gridSizes.m}%`};
`;

// metadata
export default {
  title: 'ProjectMeta',
  component: ProjectMeta,
  decorators: [(story) => <Decorator>{story()}</Decorator>],
};

// stories
export const AllData = () => (
  <ProjectMeta project={{ ...baseProject, ...project } as SitePageContextProject} />
);

export const OnlyType = () => (
  <ProjectMeta
    project={{ ...baseProject, projectType: project.projectType } as SitePageContextProject}
  />
);

export const TypeAndUrl = () => (
  <ProjectMeta
    project={
      {
        ...baseProject,
        projectType: 'Work',
        externalUrl: 'https://bladeandsoul.com',
      } as SitePageContextProject
    }
  />
);

export const TypeUrlAndPublishDate = () => (
  <ProjectMeta
    project={
      {
        ...baseProject,
        projectType: 'Work',
        externalUrl: 'https://bladeandsoul.com',
        projectPublishDate: '2/12/2016',
      } as SitePageContextProject
    }
  />
);

export const WithLastDeployedOn = () => (
  <ProjectMeta
    project={
      {
        ...baseProject,
        projectType: 'Work',
        externalUrl: 'https://bladeandsoul.com',
        projectPublishDate: '2/12/2016',
        lastDeployedOn: '7/12/2019',
      } as SitePageContextProject
    }
  />
);

export const WithGithub = () => (
  <ProjectMeta
    project={
      {
        ...baseProject,
        projectType: 'Work',
        externalUrl: 'https://bladeandsoul.com',
        projectPublishDate: '2/12/2016',
        lastDeployedOn: '7/12/2019',
        githubRepoUrl: 'https://github.com',
      } as SitePageContextProject
    }
  />
);
