import React from "react";
import type { AppProps } from "next/app";
import PropTypes from "prop-types";
import Head from "next/head";

import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";

import theme from "../src/theme";

import Header from "../src/components/header/Header";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>TodoHub</title>
    </Head>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header></Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  </>;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
