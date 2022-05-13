import React from 'react';
import { Seo } from '@types';
import meta from '@configs/meta.json';
import { ServerStyleSheet } from 'styled-components';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  Head,
  NextScript,
} from 'next/document';
import theme from '@styles/theme';
export default class MyDocument extends Document {
  seo: Seo = {
    title: meta.title,
    description: meta.description,
    image: `${meta.siteUrl}/assets/screenshot-1.png`,
    twitter: meta.twitter,
    site: meta.site,
    color: meta.color,
    language: meta.language,
  };

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={meta.language}>
        <Head>
          <meta name="description" content={this.seo.description} />
          <meta name="image" content={this.seo.image} />
          <meta name="theme-color" content={this.seo.color} />
          <meta name="application-name" content={this.seo.site} />
          <meta property="og:title" content={this.seo.title} />
          <meta property="og:description" content={this.seo.description} />
          <meta property="og:image" content={this.seo.image} />
          <meta property="og:image:url" content={this.seo.image} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content={this.seo.site} />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="twitter:creator" content={this.seo.twitter} />
          <meta name="twitter:site" content={this.seo.twitter} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={this.seo.title} />
          <meta name="twitter:description" content={this.seo.description} />
          <meta name="twitter:image" content={this.seo.image} />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=4" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=4" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=4" />
          <link rel="manifest" href="/site.webmanifest?v=4" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=4" color={theme.corePalette.aqua} />
          <link rel="shortcut icon" href="/favicon.ico?v=4" />
          <meta name="msapplication-TileColor" content={this.seo.color} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
