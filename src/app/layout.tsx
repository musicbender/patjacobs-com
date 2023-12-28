import './globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import meta from 'src/lib/constants/meta';
import Providers from './providers';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  const router = useRouter();
  const pageUrl = `${meta.siteUrl}${router.asPath}`;

  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:url" content={pageUrl} />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
