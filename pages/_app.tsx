import '../styles/globals.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import styledTheme from '../utils/styledTheme';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Loader from '../components/ReusableComponents/Loader/Loader';
import ButtonScrollToTop from '../components/ReusableComponents/ButtonScrollToTop/ButtonScrollToTop';

function MyApp({ Component, pageProps }: AppProps) {
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(() => {
    setTimeout(
      () => typeof window !== 'undefined' && setLoadComplete(true),
      1850
    );
  });

  return (
    <>
      <Head>
        <title>Плитка - ООО &quot;Плит-строй&quot;</title>
        <meta
          name='description'
          content='Плитка тротуарная (30 видов) Могилев, тактильная плитка, бордюр, облицовочный камень ,забор, и другие изделия из бетона. Доставка. Производство.'
        />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#42858f' />
      </Head>
      {loadComplete ? (
        <StyledThemeProvider theme={styledTheme}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
          <ButtonScrollToTop />
        </StyledThemeProvider>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
