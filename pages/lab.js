import Meta from "../components/Meta";
import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'

import Lab from "../components/Lab/Lab";
import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar/Navbar";

class lab extends React.Component {

  render() {
    const { t } = this.props
  return (
    <React.Fragment>
      <Meta />
      <Navbar link="Menu"/>
      <Lab/>
      <Footer/>
    </React.Fragment>
  );
}
}

lab.getInitialProps = async () => ({
  namespacesRequired: ["Lab"],
})



lab.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('Lab')(lab);
