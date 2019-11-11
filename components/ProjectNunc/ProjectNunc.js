import React from "react";

import { ProjectNuncStyle } from "./ProjectNuncStyle";


import Fonth1 from "../../styles/fontsStyles/Fonth1";
import Fontp from "../../styles/fontsStyles/Fontp";
import FontTitleInfo from "../../styles/fontsStyles/FontTitleInfo";
import { withTranslation } from '../../i18n'
import ProjectsNav from "../ProjectsNav/ProjectsNav";

import ReactPlayer from 'react-player'



const ProjectNunc = props => {
    const { t } = props;

    return (

        <ProjectNuncStyle>

            <div className="imgHome">
                    <div className="info" data-aos="fade-up">
                        <img className="logo" src="/static/svg/logoNunc.svg" />
                        <Fonth1 color="white" className="title">{t('pageTitle')}</Fonth1>
                    </div>
            </div>

            <div className="container1">
                <div className="information" >
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle1')}</FontTitleInfo>
                        <Fontp className="info2">{t('pageInfoDescription1')}</Fontp>
                    </div>
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle2')}</FontTitleInfo>
                        <Fontp className="info2">{t('pageInfoDescription2')}</Fontp>
                    </div>
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle3')}</FontTitleInfo>
                        <Fontp className="info2">{t('pageInfoDescription3')}</Fontp>
                    </div>
                    <div className="infomationStye">
                        <FontTitleInfo className="info1">{t('pageInfoTitle4')}</FontTitleInfo>
                        <Fontp className="info2">{t('pageInfoDescription4')}</Fontp>
                    </div>
                </div>
            </div>

            <div className="container3">
                <img className="img1" src="/static/img/projectNunc/imgNunc1.jpg" />
                <img className="img2" src="/static/img/projectNunc/imgNunc2.jpg" />
                <img className="img3" src="/static/img/projectNunc/imgNunc3.jpg" />
                <img className="img4" src="/static/img/projectNunc/imgNunc4.jpg" />
            </div>
            
            <div className="container2" data-aos="fade-in" data-aos-duration="1000">
                <img className="animation" src="/static/img/projectNunc/animationNunc.gif" />
                <div>
                    <Fontp className="description1">{t('pageDescription1')}</Fontp>
                    <Fontp className="description1" data-aos="fade-in" data-aos-duration="1000">{t('pageDescription2')}</Fontp>
                </div>

            </div>


            <ReactPlayer
                id="video"
                playing={true}
                url='https://player.vimeo.com/video/371854933?loop=1&badge=0&title=0&byline=0&portrait=0&autoplay=1&background=1'
                loop={true}
                playsinline={true}
                volume={0}
                muted='muted'
            />

            <div className="container5">
                <Fontp className="description3" data-aos="fade-in" data-aos-duration="1000">{t('pageDescription3')}</Fontp>
                <div className="iphone">
                    <img className="mockup" data-aos="fade-out"src="/static/img/projectNunc/mockupNunc.png" />
                </div>
            </div>
            <div className="container6" data-aos="fade-in" data-aos-duration="1000">
                <Fontp className="description4">{t('pageDescription4')}</Fontp>
                <a href="https://nunc.app"><Fontp className="description5">{t('web')}</Fontp></a>
            </div>
            <div className="container7">
                <img className="animation1 animationBouncing" src="/static/img/projectNunc/elementIpadNunc1.png" />
                <img className="animation2 animationBouncingReverse" src="/static/img/projectNunc/elementIpadNunc2.png" />
                <img className="animation3 animationBouncing2" src="/static/img/projectNunc/elementIpadNunc3.png" />
                <img className="animation4 animation2BouncingReverse" src="/static/img/projectNunc/elementIpadNunc4.png" />
                <img className="animation5 sizeAnimation" src="/static/img/projectNunc/iconIpadNunc1.svg" />
                <img className="animation6 sizeAnimation" src="/static/img/projectNunc/iconIpadNunc3.svg" />
                <img className="animation7 sizeReverseAnimation" src="/static/img/projectNunc/iconIpadNunc4.svg" />
                <img className="animation8 sizeReverseAnimation" src="/static/img/projectNunc/iconIpadNunc5.svg" />
                <img className="animation9" src="/static/img/projectNunc/ipadNunc.png" />
            </div>
            <ProjectsNav backLink={"/projectVasalto"} nextLink={"/projectAmaped"}/>
        </ProjectNuncStyle>

    );
};

export default withTranslation('Nunc')(ProjectNunc);
