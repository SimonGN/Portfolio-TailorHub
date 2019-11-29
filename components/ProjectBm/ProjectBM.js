import React from "react";

import { ProjectBMStyle } from "./ProjectBMStyle";

import FontTitle from "../../styles/fontsStyles/FontTitle";
import Fontp from "../../styles/fontsStyles/Fontp";
import FontTitleInfo from "../../styles/fontsStyles/FontTitleInfo";
import FontInfo from "../../styles/fontsStyles/FontInfo";
import FontFooter from "../../styles/fontsStyles/FontFooter";
import { Parallax } from "react-scroll-parallax";
import { withTranslation } from "../../i18n";
import ProjectsNav from "../ProjectsNav/ProjectsNav";

const ProjectBM = props => {
  const { t } = props;

  return (
      <ProjectBMStyle>
        <div>
          <div>
            <img data-aos="fade-right" className="imgMovil" src="/static/img/projectBM/bmimg0.png" />
            <div className="container1" >
              <FontTitle className="title" color="white" data-aos="fade-up">
                {t("pageTitle")}
              </FontTitle>
            </div>
          </div>

          <div className="information">
            <div className="infomationStye">
              <FontTitleInfo className="info" color="white">
                {t("pageInfoTitle1")}
              </FontTitleInfo>
              <FontInfo className="info" color="white">
                {t("pageInfoDescription1")}
              </FontInfo>
            </div>
            <div className="infomationStye">
              <FontTitleInfo className="info" color="white">
                {t("pageInfoTitle2")}
              </FontTitleInfo>
              <FontInfo className="info" color="white">
                {t("pageInfoDescription2")}
              </FontInfo>
            </div>
            <div className="infomationStye">
              <FontTitleInfo className="info" color="white">
                {t("pageInfoTitle3")}
              </FontTitleInfo>
              <FontInfo className="info" color="white">
                {t("pageInfoDescription3")}
              </FontInfo>
            </div>
            <div className="infomationStye">
              <FontTitleInfo className="info" color="white">
                {t("pageInfoTitle4")}
              </FontTitleInfo>
              <FontInfo className="info" color="white">
                {t("pageInfoDescription4")}
              </FontInfo>
            </div>
          </div>
          <Fontp className="textInfo1" color="white" data-aos="fade-out">
            {t("pageDescription1")}
          </Fontp>

          <div className="imgs">
          <Parallax slowerScrollRate y={[-20, 20]} tagOuter="figure">
            <img className="img1" src="/static/img/projectBM/bmslide1.jpg" />
          </Parallax>
          <Parallax slowerScrollRate y={[20, -20]} tagOuter="figure">
            <img className="img3" src="/static/img/projectBM/bmslide3.jpg" />
          </Parallax>
          <Parallax slowerScrollRate y={[-20, 20]} tagOuter="figure">
            <img className="img2" src="/static/img/projectBM/bmslide2.jpg" />
          </Parallax>
          <Parallax slowerScrollRate y={[20, -20]} tagOuter="figure">
            <img className="img4" src="/static/img/projectBM/bmslide4.jpg" />
          </Parallax>
        </div>

        
          <div className="container3">
            <img className="img5" src="/static/img/projectBM/bmimg1.png" />
            <div>
              <Fontp className="textInfo2" color="white">
                {t("pageDescription2")}
              </Fontp>
              <img className="logoBm" src="/static/svg/Logobm.svg" />
            </div>
          </div>
          <div className="imgsIphone">
            <img className="img6" data-aos="fade-right" src="/static/img/projectBM/bmimg2.png" />
            <img className="img7" data-aos="fade-out" src="/static/img/projectBM/bmimg3.png" />
            <img className="img8" data-aos="fade-left" src="/static/img/projectBM/bmimg5.png" />
          </div>
        </div>
        <ProjectsNav color={"white"} backLink={"/projectMove"} nextLink={"/projectVasalto"}/>
      </ProjectBMStyle>
  );
};

export default withTranslation("BM")(ProjectBM);
