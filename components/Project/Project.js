import React from "react";
import Link from "next/link";
import { ProjectStyle } from "./ProjectStyle";
import { Galery } from "./Galery";

import Fonta from "../../styles/fontsStyles/Fonta";
import Fontp from "../../styles/fontsStyles/Fontp";

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

    }
  };

  render() {
    const { settings } = this.state;
    const { t, projectRef } = this.props;

    return (
      <ProjectStyle>

        <Galery >
          
            <Slider {...settings}>

              <div className="contentProject">
                <div className="contentImg">
                  <img className="imgProject" src="/static/img/project/tailorAmaped.jpg" />
                </div>
                <div className="infomationStye">
                  <div className="title">
                    <Fontp className="info1" color="white">{t('Project1')}</Fontp>
                  </div>
                  <div className="text">
                    <div lassName="Description">
                      <Fontp className="info1" color="white">{t('Description1')}</Fontp>
                      <Fontp className="info2" color="white">{t('Stack1')}</Fontp>
                    </div>
                    <div className="viewMore">
                      <Link style="cursor:pointer" href="/projectAmaped"><Fonta>{t('button1')}</Fonta></Link>
                      <Link style="cursor:pointer" href="/projectAmaped"><Fonta>{t('button2')}</Fonta></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contentProject">
                <div className="contentImg">
                  <img className="imgProject" src="/static/img/project/tailorAmaped.jpg" />
                </div>
                <div className="infomationStye">
                  <div className="title">
                    <Fontp className="info1" color="white">{t('Project1')}</Fontp>
                  </div>
                  <div className="text">
                    <div lassName="Description">
                      <Fontp className="info1" color="white">{t('Description1')}</Fontp>
                      <Fontp className="info2" color="white">{t('Stack1')}</Fontp>
                    </div>
                    <div className="viewMore">
                      <Link style="cursor:pointer" href="/projectAmaped"><Fonta>{t('button1')}</Fonta></Link>
                      <Link style="cursor:pointer" href="/projectAmaped"><Fonta>{t('button2')}</Fonta></Link>
                    </div>
                  </div>
                </div>
              </div>




            </Slider>
          
        </Galery>

       
      </ProjectStyle >
    );
  }
}

export default withTranslation('Home')(OurProjects);
