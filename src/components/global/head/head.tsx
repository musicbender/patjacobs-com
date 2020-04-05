import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { ISeo } from '../../../../types/global';

interface IProps {
  pathname: string,
  description?: string,
  meta?: string[],
  keywords?: string[],
  title?: string,
  image?: string,
  article?: boolean
}

const Head: React.FunctionComponent<IProps> = ({
  pathname = '/',
  description,
  title,
  image,
  article = false,
}: IProps) => {
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

  const seo: ISeo = {
    title: title || site.title,
    description: description || site.description,
    image: image || `${site.siteUrl}/assets/thumbnail.png`,
    url: `${site.siteUrl}${pathname}`,
    twitter: site.twitter,
    site: site.site,
    color: site.color,
    language: site.language
  };

  return (
    <Helmet
      title={title || site.siteMetadata.title}
    >
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
      { article && <meta property="og:type" content="article" /> }
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
}

export default Head;
