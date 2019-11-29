import React from "react";
import Link from "next/link";
import { ProjectStyle } from "./ProjectStyle";
import { Galery } from "./Galery";

import Fonth1 from "../../styles/fontsStyles/Fonth1";
import FontInfo from "../../styles/fontsStyles/FontInfo";
import FontTitleInfo from "../../styles/fontsStyles/FontTitleInfo";

import Slider from "react-slick";

import { withTranslation } from '../../i18n'

class OurProjects extends React.Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    }
  };

  render() {
    const { settings } = this.state;
    const { t, projectRef } = this.props;

    return (
      <ProjectStyle>
        <div className="ourProject" ref={projectRef}>

          <div className="infomationStye">
            <div className="title">
              <FontTitleInfo className="info1">{t('Project1')}</FontTitleInfo>
            </div>
            <div lassName="Description">
              <FontInfo className="info2">{t('Description1')}</FontInfo>
              <FontInfo className="info2">{t('Stack1')}</FontInfo>
            </div>
            <div className="viewMore">
              <Link style="cursor:pointer" href="/projectAmaped"><a>{t('button1')}</a></Link>
              <Link style="cursor:pointer" href="/projectAmaped"><a>{t('button2')}</a></Link>
            </div>
          </div>

            <Galery >
              <div>
                <Slider {...settings}>

                  <div className="contentProject">
                    <div className="contentImg">
                      <img className="imgProject" src="/static/img/project/tailorAmaped.jpg"/>
                    </div>
                  </div>

                </Slider>
              </div>
            </Galery>

          </div>
      </ProjectStyle>
    );
  }
}

export default withTranslation('Home')(OurProjects);
