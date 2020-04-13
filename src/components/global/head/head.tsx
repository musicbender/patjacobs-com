import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { ISeo } from '../../../../types/global';

export interface Props {
    pathname?: string;
    description?: string;
    meta?: string[];
    keywords?: string[];
    titlePrefix?: string;
    image?: string;
    article?: boolean;
}

const Head: React.FunctionComponent<Props> = ({
    pathname = '/',
    description,
    titlePrefix,
    image,
    article = false,
}: Props) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        site
                        title
                        titleTemplate
                        description
                        siteUrl
                        language
                        color
                        twitter
                    }
                }
            }
        `
    );

    const title = titlePrefix
        ? `${titlePrefix} | ${site.siteMetadata.title}`
        : site.siteMetadata.title;

    const seo: ISeo = {
        title: title || site.siteMetadata.title,
        description: description || site.siteMetadata.description,
        image: image || `${site.siteMetadata.siteUrl}/assets/thumbnail.png`,
        url: `${site.siteMetadata.siteUrl}${pathname}`,
        twitter: site.siteMetadata.twitter,
        site: site.siteMetadata.site,
        color: site.siteMetadata.color,
        language: site.siteMetadata.language,
    };

    return (
        <Helmet title={title || site.siteMetadata.title}>
            <html lang={seo.language} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="theme-color" content={seo.color} />
            <meta name="application-name" content={seo.site} />
            <link rel="canonical" href={seo.url} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            {article && <meta property="og:type" content="article" />}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content={seo.site} />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="twitter:creator" content={seo.twitter} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:url" content={seo.url} />
        </Helmet>
    );
};

export default Head;
