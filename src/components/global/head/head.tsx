import React from 'react';
import { Helmet } from 'react-helmet';
import meta from '@configs/meta.json';
import { ISeo, HeadProps } from '@types';

const Head: React.FunctionComponent<HeadProps> = ({
  pathname = '/',
  description,
  titlePrefix,
  image,
  article = false,
}: HeadProps) => {
  const title = titlePrefix ? `${titlePrefix} | ${meta.title}` : meta.title;

  const seo: ISeo = {
    title: title || meta.title,
    description: description || meta.description,
    image: image || `${meta.siteUrl}/assets/thumbnail.png`,
    url: `${meta.siteUrl}${pathname}`,
    twitter: meta.twitter,
    site: meta.site,
    color: meta.color,
    language: meta.language,
  };

  return (
    <Helmet title={title || meta.title}>
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
