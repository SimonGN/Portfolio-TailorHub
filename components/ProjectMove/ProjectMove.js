import React from "react";

import { ProjectMoveStyle } from "./ProjectMoveStyle";

import Fonth1 from "../../styles/fontsStyles/Fonth1";
import Fontp from "../../styles/fontsStyles/Fontp";
import FontTitleInfo from "../../styles/fontsStyles/FontTitleInfo";
import FontInfo from "../../styles/fontsStyles/FontInfo";
import { Parallax } from "react-scroll-parallax";
import { withTranslation } from "../../i18n";
import ProjectsNav from "../ProjectsNav/ProjectsNav";

const ProjectMove = props => {
  const { t } = props;

  return (
    <ProjectMoveStyle>
      <div>
        <div className="intro">
        <div className="car">
            <img data-aos="fade-left" data-aos-duration="4000" className="imgCar" src="/static/img/projectMove/moveCar1.png" />
            <div className="box">
              <img data-aos="fade-left" data-aos-duration="1500"
                className="imgBox1"
                src="/static/img/projectMove/moveCar2.png"
              />
              <img data-aos="fade-left" data-aos-duration="2000"
                className="imgBox2"
                src="/static/img/projectMove/moveCar3.png"
              />
            </div>
          </div>
          <div className="container1">
            <img className="logo" src="/static/img/projectMove/moveLogo.svg" />
            <Fonth1 className="title">{t("pageTitle")}</Fonth1>
          </div>
        </div>


        <div className="information">
          <div className="infomationStye">
            <FontTitleInfo className="info1">
              {t("pageInfoTitle1")}
            </FontTitleInfo>
            <FontInfo className="info2">{t("pageInfoDescription1")}</FontInfo>
          </div>
          <div className="infomationStye">
            <FontTitleInfo className="info1">
              {t("pageInfoTitle2")}
            </FontTitleInfo>
            <FontInfo className="info2">{t("pageInfoDescription2")}</FontInfo>
          </div>
          <div className="infomationStye">
            <FontTitleInfo className="info1">
              {t("pageInfoTitle3")}
            </FontTitleInfo>
            <FontInfo className="info2">{t("pageInfoDescription3")}</FontInfo>
          </div>
          <div className="infomationStye">
            <FontTitleInfo className="info1">
              {t("pageInfoTitle4")}
            </FontTitleInfo>
            <FontInfo className="info2">{t("pageInfoDescription4")}</FontInfo>
          </div>
        </div>

        <Fontp
          className="textInfo1"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {t("pageDescription1")}
        </Fontp>

        <div className="imgs">
          <Parallax slowerScrollRate y={[-20, 20]} tagOuter="figure">
            <img className="img1" src="/static/img/projectMove/moveImg1.jpg" />
          </Parallax>
          <Parallax slowerScrollRate y={[20, -20]} tagOuter="figure">
            <img className="img3" src="/static/img/projectMove/moveImg2.jpg" />
          </Parallax>
          <Parallax slowerScrollRate y={[-20, 20]} tagOuter="figure">
            <img className="img2" src="/static/img/projectMove/moveImg3.jpg" />
          </Parallax>
          <Parallax slowerScrollRate y={[20, -20]} tagOuter="figure">
            <img className="img4" src="/static/img/projectMove/moveImg4.jpg" />
          </Parallax>
        </div>

        <div className="container3">
          <img
            className="imgIpad1"
            src="/static/img/projectMove/moveIpad1.gif"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
          <Fontp className="textInfo2">{t("pageDescription2")}</Fontp>
        </div>
        <div className="ipads">
          <img
            className="imgIpad2"
            src="/static/img/projectMove/moveIpad2.gif"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
          <img
            className="imgIpad3"
            src="/static/img/projectMove/moveIpad3.gif"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
        <div className="container4">
          <Fontp>{t("pageDescription3")}</Fontp>
          <Fontp>{t("pageDescription4")}</Fontp>

        </div>
      </div>

      <ProjectsNav backLink={"/projectNunc"} nextLink={"/projectBM"} />
    </ProjectMoveStyle>
  );
};

export default withTranslation("Move")(ProjectMove);
