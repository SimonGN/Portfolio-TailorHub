import React from "react";
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
                  <Fontp className="info1" color="white">{t('Project7')}</Fontp>
                </div>
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description7')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info2" color="white">{t('StackWeb7')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button1')}</Fonta></a>
                    <a href=""><Fonta>{t('button2')}</Fonta></a>
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
                  <Fontp className="info1" color="white">{t('Project6')}</Fontp>
                </div>
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description6')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info2" color="white">{t('StackWeb6')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button1')}</Fonta></a>
                    <a href=""><Fonta>{t('button2')}</Fonta></a>
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
                  <Fontp className="info1" color="white">{t('Project5')}</Fontp>
                </div>
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description5')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info2" color="white">{t('StackWeb5')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button1')}</Fonta></a>
                    <a href=""><Fonta>{t('button2')}</Fonta></a>
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
                  <Fontp className="info1" color="white">{t('Project4')}</Fontp>
                </div>
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description4')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info2" color="white">{t('StackWeb4')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button1')}</Fonta></a>
                    <a href=""><Fonta>{t('button2')}</Fonta></a>
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
                  <Fontp className="info1" color="white">{t('Project3')}</Fontp>
                </div>
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description3')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info2" color="white">{t('StackWeb3')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button1')}</Fonta></a>
                    <a href=""><Fonta>{t('button2')}</Fonta></a>
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
                  <Fontp className="info1" color="white">{t('Project2')}</Fontp>
                </div>
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description2')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info2" color="white">{t('StackWeb2')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button1')}</Fonta></a>
                    <a href=""><Fonta>{t('button2')}</Fonta></a>
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
                <div className="description">
                  <Fontp className="info1" color="white">{t('Description1')}</Fontp>
                </div>
                <div className="other">
                  <Fontp className="info" color="white">{t('StackWeb1')}</Fontp>
                  <div className="links">
                    <a href=""><Fonta>{t('button1')}</Fonta></a>
                    <a href=""><Fonta>{t('button2')}</Fonta></a>
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
