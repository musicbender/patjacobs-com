import React from 'react';
import { format, parseISO } from 'date-fns';
import { ProcessedProject } from '@types';
import { pruneUrl } from '@util/util';
import { projectMeta as content } from '@configs/case-study.json';
import {
  ProjectMetaWrapper,
  ContentWrapper,
  Label,
  ContentValue,
  ContentValueLink,
  IconWrapper,
  StorybookIcon,
  GithubIcon,
} from './styles';

type Props = {
  project?: ProcessedProject;
};

const ProjectMeta = ({ project }: Props): JSX.Element => {
  const getGithubIcon = (url: string) => (
    <IconWrapper href={url} target="_blank">
      <GithubIcon />
    </IconWrapper>
  );

  const getStorybookIcon = (url: string): JSX.Element => (
    <IconWrapper href={url} target="_blank">
      <StorybookIcon />
    </IconWrapper>
  );

  const publishDate: Date = parseISO(project.projectPublishDate);

  return (
    project && (
      <ProjectMetaWrapper>
        {project.projectPublishDate && (
          <ContentWrapper color="aqua">
            <Label>{content.datePublished}</Label>
            <ContentValue>{format(publishDate, 'P')}</ContentValue>
            <ContentValue>{format(publishDate, 'p')}</ContentValue>
          </ContentWrapper>
        )}
        ``
        {project.externalUrl && (
          <ContentWrapper color="orange">
            <Label>{content.siteUrl}</Label>
            <ContentValueLink href={project.externalUrl} target="_blank">
              {pruneUrl(project.externalUrl)}
            </ContentValueLink>
          </ContentWrapper>
        )}
        {project.lastDeployedOn && (
          <ContentWrapper color="purple">
            <Label>{content.lastDeployment}</Label>
            <ContentValue>{project.lastDeployedOn}</ContentValue>
          </ContentWrapper>
        )}
        {project.projectPublishDate && (
          <ContentWrapper color="yellow">
            <Label>{content.projectType}</Label>
            <ContentValue color="yellow">{project.projectType.toLowerCase()}</ContentValue>
          </ContentWrapper>
        )}
      </ProjectMetaWrapper>
    )
  );
};

export default ProjectMeta;
