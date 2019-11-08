import React from "react";
import App, { Container } from "next/app";
import { appWithTranslation, i18n } from "../i18n";
import { ParallaxProvider } from "react-scroll-parallax";

class MyApp extends App {
  render() {
    i18n.language ? (i18n.language = i18n.language) : "es";
    const { Component, pageProps } = this.props;
    return (
      <ParallaxProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ParallaxProvider>
    );
  }
}

export default appWithTranslation(MyApp);
