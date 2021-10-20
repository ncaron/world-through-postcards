import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../footer';
import Header from '../header';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const DESCRIPTION =
  'Travel the world through this collection of postcards. Trading coming soon!';

const Layout: NextPage<LayoutProps> = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title} | World Through Postcards</title>
        <meta name='description' content={DESCRIPTION} key='description' />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/favicons/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/favicons/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/favicons/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/favicons/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/favicons/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/favicons/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/favicons/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/favicons/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicons/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicons/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
