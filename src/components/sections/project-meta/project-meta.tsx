import React from 'react';
import {
    ProjectMetaWrapper,
    ContentWrapper,
    Label,
    ContentValue,
    ContentValueLink,
} from './styles';
import { Gcms_Project } from '../../../../types';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    project?: Gcms_Project;
}

const ProjectMeta = ({ project }: Props) => {
    const { projectMeta: content } = useStaticQuery(graphql`
        query {
            configs {
                caseStudy {
                    projectMeta {
                        datePublished
                        lastDeployment
                        siteUrl
                        projectType
                    }
                }
            }
        }
    `).configs.caseStudy;

    return (
        project && (
            <ProjectMetaWrapper>
                {project.projectPublishDate && (
                    <ContentWrapper>
                        <Label>{content.datePublished}</Label>
                        <ContentValue color="aqua">{project.projectPublishDate}</ContentValue>
                    </ContentWrapper>
                )}
                {project.externalUrl && (
                    <ContentWrapper>
                        <Label>{content.siteUrl}</Label>
                        <ContentValueLink href={content.siteUrl} color="orange" target="_blank">
                            {project.externalUrl}
                        </ContentValueLink>
                    </ContentWrapper>
                )}
                {project.lastDeployedOn && (
                    <ContentWrapper>
                        <Label>{content.lastDeployment}</Label>
                        <ContentValue color="purple">{project.lastDeployedOn}</ContentValue>
                    </ContentWrapper>
                )}
                {project.projectPublishDate && (
                    <ContentWrapper>
                        <Label>{content.projectType}</Label>
                        <ContentValue color="yellow">
                            {project.projectType.toLowerCase()}
                        </ContentValue>
                    </ContentWrapper>
                )}
            </ProjectMetaWrapper>
        )
    );
};

export default ProjectMeta;
