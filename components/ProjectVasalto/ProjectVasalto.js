import React from "react";

import ProjectVasaltoStyle from "./ProjectVasaltoStyle";


import Fonth1 from "../../styles/fontsStyles/Fonth1";
import Fontp from "../../styles/fontsStyles/Fontp";
import FontInfo from "../../styles/fontsStyles/FontInfo";
import FontTitleInfo from "../../styles/fontsStyles/FontTitleInfo";
import { withTranslation } from '../../i18n'
import ProjectsNav from "../ProjectsNav/ProjectsNav";

import ReactPlayer from 'react-player'




const ProjectVasalto = props => {
    const { t } = props;

    return (

        <ProjectVasaltoStyle>

            <ReactPlayer
                id="video"
                playing={true}
                url='https://player.vimeo.com/video/371643005?loop=1&badge=0&title=0&byline=0&portrait=0&autoplay=1&background=1'
                loop={true}
                playsinline={true}
                volume={0}
                muted='muted'
                data-aos="fade-in" data-aos-duration="1000"
            />

            <div className="container1" data-aos="fade-in" data-aos-duration="1000">
                <Fonth1 className="title">{t('pageTitle')}</Fonth1>
                <div className="information">
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle1')}</FontTitleInfo>
                        <FontInfo className="info2">{t('pageInfoDescription1')}</FontInfo>
                    </div>
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle2')}</FontTitleInfo>
                        <FontInfo className="info2">{t('pageInfoDescription2')}</FontInfo>
                    </div>
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle3')}</FontTitleInfo>
                        <FontInfo className="info2">{t('pageInfoDescription3')}</FontInfo>
                    </div>
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle4')}</FontTitleInfo>
                        <FontInfo className="info2">{t('pageInfoDescription4')}</FontInfo>
                    </div>
                </div>
            </div>
            <div className="textImg" >
                <div className="container2" data-aos="fade-in" data-aos-duration="1000">
                    <Fontp>{t('pageDescription1')}</Fontp>
                    <a href="https://vasalto.com/" target="_blank"><Fontp data-aos="fade-in" data-aos-duration="1000">{t('web')}</Fontp></a>

                </div>
                <div className="img2"data-aos="fade-in" data-aos-duration="1000">
                    <img className="mockup" src="/static/img/projectVasalto/vasaltoIpadScreen.jpg" />
                </div>

                <div className="container3"data-aos="fade-in" data-aos-duration="1000">
                    <Fontp>{t('pageDescription2')}</Fontp>

                </div>
                <div className="img2"data-aos="fade-in" data-aos-duration="1000">
                    <div className="textFly">
                        <Fontp>{t('pageDescription3')}</Fontp>
                    </div>
                    <img className="mockup" src="/static/img/projectVasalto/vasaltoIphoneScreen.jpg" />
                </div>

            </div>



            <ProjectsNav backLink={"/projectBM"} nextLink={"/projectNunc"} />
        </ProjectVasaltoStyle>

    );
};

export default withTranslation('Vasalto')(ProjectVasalto);
