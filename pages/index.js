import Meta from "../components/Meta";
import React, { createRef } from "react";
import PropTypes from "prop-types";
import Tailor from "../components/Tailor/Tailor";
import Navbar from "../components/Navbar/Navbar";
import WhatIs from "../components/WhatIs/WhatIs";
import Project from "../components/Project/Project";
import We from "../components/WeWork/We";
import Services from "../components/Services/Services";
import HowDo from "../components/TailorIs/Howdo";
import WeWork from "../components/WeWork/WeWork";
import TheySaid from "../components/TheySaid/TheySaid";
import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { withTranslation } from "../i18n";
import router from 'next/router'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.ref = createRef()
  }

  componentDidMount() {
    this.runAOS();
    if(router.query && router.query.scroll) {
      setTimeout(() => {
        this.handleScroll()
      }, 100);
    }
      
  }

  

  runAOS = () => {
    if (!AOS.refresh()) {
      AOS.init({
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 1000,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
        ssr: true
      });
    }
  };

  handleScroll = () => {
    this.ref.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    return (
      <React.Fragment>
        <Meta />
        <Navbar link="Menu" handleScroll={this.handleScroll} />
        {/* <Tailor /> */}
        <WhatIs />
        <Project projectRef={e => (this.ref = e)} />
        <WeWork />
        <Services />
        <HowDo />
        
        <We />
        <TheySaid />
        <Footer />
      </React.Fragment>
    );
  }
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["Home"]
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("Home")(Home);
