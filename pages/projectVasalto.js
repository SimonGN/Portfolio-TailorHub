import Meta from "../components/Meta";
import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"

import ProjectVasalto from "../components/ProjectVasalto/ProjectVasalto";

class projectVasalto extends React.Component {

  componentDidMount() {
    this.runAOS();
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

  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <Meta />
        <Navbar link="Menu" />
        <ProjectVasalto />
        <Footer />
      </React.Fragment>
    );
  }
}

projectVasalto.getInitialProps = async () => ({
  namespacesRequired: ["Vasalto"],
})



projectVasalto.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('Vasalto')(projectVasalto);
