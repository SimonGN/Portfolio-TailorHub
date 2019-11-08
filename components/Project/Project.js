import React from "react";
import Link from "next/link";
import { ProjectStyle } from "./ProjectStyle";
import { Galery } from "./Galery";

import Fonth1 from "../../styles/fontsStyles/Fonth1";

import Slider from "react-slick";

import { withTranslation } from '../../i18n'

class OurProjects extends React.Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._manageResize);
    this._initialSize();
  }

  _initialSize = () => {
    switch (true) {
      case window.innerWidth <= 768:
        this.setState({
          ...this.state,
          settings: {
            ...this.state.settings,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        });
        break;
      default:
        this.setState({
          ...this.state,
          settings: {
            ...this.state.settings,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        });
    }
  };

  _manageResize = () => {
    switch (true) {
      case window.innerWidth <= 768:
        this.setState({
          ...this.state,
          settings: {
            ...this.state.settings,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        });
        break;
      default:
        this.setState({
          ...this.state,
          settings: {
            ...this.state.settings,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        });
    }
  };

  render() {
    const { settings } = this.state;
    const { t, projectRef } = this.props;

    return (
      <ProjectStyle>
        <div className="ourProject" ref={projectRef}>
          <div className="global">
            <Fonth1 className="title">{t('pageTitle2')}</Fonth1>
            <Galery >
              <div>
                <Slider {...settings}>

                  <div className="contentProject">
                    <div className="contentLogo">
                      <Link style="cursor:pointer" href="/projectvasalto">
                        <img style={{ "cursor": "pointer" }} className="logoVasalto" src="/static/svg/vasaltoLogoTailor.svg" />
                      </Link>
                    </div>
                    <div className="contentImg">
                      <img className="imgMove" src="/static/img/projectVasalto.jpg" />
                    </div>
                    <div className="viewMore">
                      <Link style="cursor:pointer" href="/projectvasalto">
                        <a>{t('pageTitle2Info1')}</a>
                      </Link>
                    </div>
                  </div>

                  <div className="contentProject">
                    <div className="contentLogo">
                      <Link style="cursor:pointer" href="/projectNunc">
                        <img style={{ "cursor": "pointer" }} className="logoNunc" src="/static/svg/nuncLogoTailor.svg" />
                      </Link>
                    </div>
                    <div className="contentImg">
                      <img className="imgMove" src="/static/img/projectNunc.jpg" />
                    </div>
                    <div className="viewMore">
                      <Link style="cursor:pointer" href="/projectNunc">
                        <a>{t('pageTitle2Info1')}</a>
                      </Link>
                    </div>
                  </div>

                  <div className="contentProject">
                    <div className="contentLogo">
                      <Link style="cursor:pointer" href="/projectAmaped">
                        <img style={{ "cursor": "pointer" }} className="logoMove" src="/static/svg/amapedLogoTailor.svg" />
                      </Link>
                    </div>
                    <div className="contentImg">
                      <img className="imgMove" src="/static/img/projectAmaped.jpg" />
                    </div>
                    <div className="viewMore">
                      <Link style="cursor:pointer" href="/projectAmaped">
                        <a>{t('pageTitle2Info1')}</a>
                      </Link>
                    </div>
                  </div>

                  <div className="contentProject">
                    <div className="contentLogo">
                      <Link style="cursor:pointer" href="/projectMove">
                        <img style={{ "cursor": "pointer" }} className="logoMove" src="/static/svg/moveLogoTailor.svg" />
                      </Link>
                    </div>
                    <div className="contentImg">
                      <img className="imgMove" src="/static/img/projectMove.jpg" />
                    </div>
                    <div className="viewMore">
                      <Link style="cursor:pointer" href="/projectMove">
                        <a>{t('pageTitle2Info1')}</a>
                      </Link>
                    </div>
                  </div>

                  <div className="contentProject">
                    <div className="contentLogo">
                      <Link style="cursor:pointer" href="/projectBM">
                        <img style={{ "cursor": "pointer" }} className="logoMove" src="/static/svg/bmLogoTailor.svg" />
                      </Link>
                    </div>
                    <div className="contentImg">
                      <img className="imgMove" src="/static/img/projectBm.png" />
                    </div>
                    <div className="viewMore">
                      <Link style="cursor:pointer" href="/projectBM">
                        <a>{t('pageTitle2Info1')}</a>
                      </Link>
                    </div>
                  </div>



                </Slider>
              </div>
            </Galery>
          </div>
        </div>
      </ProjectStyle >
    );
  }
}

export default withTranslation('Home')(OurProjects);
