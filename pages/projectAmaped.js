import Meta from "../components/Meta";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ProjectAmaped from "../components/ProjectAmaped/ProjectAmaped";
import AOS from "aos";
import "aos/dist/aos.css";

class projectAmaped extends React.Component {
  componentDidMount() {
    this.runAOS();
    this.controlScroll();
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

  controlScroll = () => {
    document.addEventListener("scroll", () => {
      if (window.location.href.includes("Amaped")) {
        switch (true) {
          case window.innerWidth <= 414:
            this.manageScroll(-350, 300);
            break;
          case window.innerWidth <= 768:
            this.manageScroll(-400, 650);
            break;
          case window.innerWidth <= 1024:
            this.manageScroll(-300, 600, false);
            break;
          case window.innerWidth <= 1440:
            this.manageScroll(-200, 850, false);
            break;
          default:
              this.manageScroll(-400, 1100, false);
        }
      }
    });
  };

  manageScroll = (breakTop, breakBottom, scrollText = false) => {
    const element = document.querySelector("#container3");
    const ipad = document.querySelector("#amapedIpad");
    const text = document.querySelector("#textInfo4");
    const distanceTop = element.getBoundingClientRect().top;
    const distanceBottom = element.getBoundingClientRect().bottom;
    if (distanceTop <= breakTop) {
      ipad.classList.add("fixed");
      if(scrollText) { 
        text.classList.add("fixed");
      }
    } else if (distanceTop > breakTop) {
      ipad.classList.remove("fixed");
      if(scrollText) {
        text.classList.remove("fixed");
      }
    }

    if (distanceBottom <= breakBottom) {
      ipad.classList.add("fixed2");
      if(scrollText) {
        text.classList.add("fixed2");
      }
    } else if (distanceBottom > breakBottom) {
      ipad.classList.remove("fixed2");
      if(scrollText) {
        text.classList.remove("fixed2");
      }
    }
  };

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <Meta />
        <Navbar link="Menu" />
        <ProjectAmaped />
        <Footer />
      </React.Fragment>
    );
  }
}

projectAmaped.getInitialProps = async () => ({
  namespacesRequired: ["Amaped"]
});

projectAmaped.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("Amaped")(projectAmaped);
