import React from "react";

import { ProjectAmapedStyle } from "./ProjectAmapedStyle";


import FontTitle from "../../styles/fontsStyles/FontTitle";
import Fontp from "../../styles/fontsStyles/Fontp";
import FontTitleInfo from "../../styles/fontsStyles/FontTitleInfo";
import FontInfo from "../../styles/fontsStyles/FontInfo"

import { withTranslation } from '../../i18n'
import ProjectsNav from "../ProjectsNav/ProjectsNav";



const ProjectAmaped = props => {
    const { t } = props;

    return (

        <ProjectAmapedStyle>

            <div className="imgHome">
                <img className="img1 animationBouncing" src="/static/img/projectAmaped/imgAmaped1.png" />
                <img className="img2 animationBouncingReverse" src="/static/img/projectAmaped/imgAmaped2.png" />
                <img className="img3 animationBouncing2" src="/static/img/projectAmaped/imgAmaped3.png" />
                <img className="img4 animationBouncing3" src="/static/img/projectAmaped/imgAmaped4.png" />
                <img className="img5 animation2BouncingReverse" src="/static/img/projectAmaped/imgAmaped5.png" />
                <img className="logo animation3BouncingReverse" src="/static/svg/logoAmaped.svg" />
            </div>

            <div className="container1" data-aos="fade-in" data-aos-duration="1000">
                <FontTitle className="title">{t('pageTitle')}</FontTitle>
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

            <div className="container2" data-aos="fade-in" data-aos-duration="1000">
                <div className="embed-container" data-aos="fade-in">
                    <iframe className="video" src="https://player.vimeo.com/video/363522380" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <div className="containerDos">
                    <div className="text">
                        <Fontp className="textInfo2">{t('pageDescription1')}</Fontp>
                        <Fontp className="textInfo2">{t('pageDescription2')}</Fontp>
                    </div>

                    <div className="imgBranding" data-aos="fade-in" data-aos-duration="1000">
                        <div className="blockBranding1">
                            <img className="imgBranding1" src="/static/img/projectAmaped/imgAmaped6.jpg" />
                            <img className="imgBranding2" src="/static/img/projectAmaped/imgAmaped7.jpg" />
                        </div>
                        <div className="blockBranding2">
                            <img className="imgBranding3" src="/static/img/projectAmaped/imgAmaped8.jpg" />
                            <img className="imgBranding4" src="/static/img/projectAmaped/imgAmaped9.jpg" />
                            <img className="imgBranding5" src="/static/img/projectAmaped/imgAmaped10.jpg" />
                        </div>
                        <div className="blockBranding3">
                            <img className="imgBranding6" src="/static/img/projectAmaped/imgAmaped11.jpg" />
                            <img className="imgBranding7" src="/static/img/projectAmaped/imgAmaped12.jpg" />
                        </div>
                    </div>
                </div>
                <div className="gif" data-aos="fade-in" data-aos-duration="1000">
                    <img src="/static/img/projectAmaped/amaped.gif" />
                    <Fontp className="textInfo3">{t('pageDescription3')}</Fontp>
                    <a href="https://amaped.com/" target="_blank"><Fontp className="textInfo4" data-aos="fade-in" data-aos-duration="1000">{t('web')}</Fontp></a>
                </div>
            </div>
            <div  className="container3" id="container3">
                <div className="containerTres" >
                    <Fontp className="textInfo3" id="textInfo4">{t('pageDescription4')}</Fontp>
                    <div className="screen">
                        <img id="amapedIpad" className="ipad" src="/static/img/projectAmaped/Ipad.png" />
                        <img className="imgWeb1" src="/static/img/projectAmaped/webAmaped1.jpg" />
                    </div>
                </div>

            </div>
            <div className="container4"  data-aos="fade-in" data-aos-duration="1000">
                <Fontp className="textInfo4">{t('pageDescription5')}</Fontp>
            </div>
            <div className="mockupScreen" data-aos="fade-in">
                <img className="mockup" src="/static/img/projectAmaped/amapedScreen.jpg"  />
            </div>

            <ProjectsNav backLink={"/projectBM"} nextLink={"/projectNunc"} />
        </ProjectAmapedStyle>

    );
};

export default withTranslation('Amaped')(ProjectAmaped);
