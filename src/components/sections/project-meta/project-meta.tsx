import React from 'react';
import { format, parseISO } from 'date-fns';
import { ProcessedProject } from '@types';
import { pruneUrl } from '@util/util';
import content from '@configs/case-study.json';
import {
  ProjectMetaWrapper,
  ContentWrapper,
  Label,
  ContentValue,
  ContentValueLink,
  IconWrapper,
  StyledStorybookIcon,
  StyledGithubIcon,
} from './styles';

type Props = {
  project?: ProcessedProject;
};

const ProjectMeta = ({ project }: Props): JSX.Element => {
  const getGithubIcon = (url: string) => (
    <IconWrapper href={url} target="_blank">
      <StyledGithubIcon />
    </IconWrapper>
  );

  const getStorybookIcon = (url: string): JSX.Element => (
    <IconWrapper href={url} target="_blank">
      <StyledStorybookIcon />
    </IconWrapper>
  );

  const publishDate: Date = parseISO(project.projectPublishDate);

  return (
    project && (
      <ProjectMetaWrapper>
        {project.projectPublishDate && (
          <ContentWrapper color="aqua">
            <Label>{content.projectMeta.datePublished}</Label>
            <ContentValue>{format(publishDate, 'P')}</ContentValue>
            <ContentValue>{format(publishDate, 'p')}</ContentValue>
          </ContentWrapper>
        )}
        {project.externalUrl && (
          <ContentWrapper color="orange">
            <Label>{content.projectMeta.siteUrl}</Label>
            <ContentValueLink href={project.externalUrl} target="_blank">
              {pruneUrl(project.externalUrl)}
            </ContentValueLink>
          </ContentWrapper>
        )}
        {project.lastDeployedOn && (
          <ContentWrapper color="purple">
            <Label>{content.projectMeta.lastDeployment}</Label>
            <ContentValue>{project.lastDeployedOn}</ContentValue>
          </ContentWrapper>
        )}
        {project.projectPublishDate && (
          <ContentWrapper color="yellow">
            <Label>{content.projectMeta.projectType}</Label>
            <ContentValue color="yellow">{project.projectType.toLowerCase()}</ContentValue>
          </ContentWrapper>
        )}
      </ProjectMetaWrapper>
    )
  );
};

export default ProjectMeta;
