import React from 'react';
import Layout from '../../layout';
import CaseStudy from '../pages/case-study';
import { GatsbyLocation } from '../../../types';

interface Props {
    pageContext: any;
    location: GatsbyLocation;
}

const CaseStudyTemplate = (props: Props) => (
    <Layout
        location={props.location}
        headProps={{ titlePrefix: `Project: ${props.pageContext.project.title}` }}
    >
        <CaseStudy
            project={props.pageContext.project}
            allProjects={props.pageContext.allProjects}
            sections={props.pageContext.sections}
            location={props.location}
        />
    </Layout>
);

export default CaseStudyTemplate;
