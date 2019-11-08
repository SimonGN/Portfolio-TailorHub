import React from "react";
import Link from "next/link";

import FontFooter from "../../styles/fontsStyles/FontFooter";
import Fontp from "../../styles/fontsStyles/Fontp";
import Fonta from "../../styles/fontsStyles/Fonta"




import { withTranslation } from "../../i18n";
import { ContactStyle } from "./ContactStyles";

const Contact = props => {
  const { t } = props;

  return (
    <ContactStyle>
      <div className="imgage" data-aos="fade-in" data-aos-duration="1500">
        <img src="/static/img/tailorContact.jpg" />
      </div>
      <div className="global">
        <div className="container1"data-aos="fade-in" data-aos-duration="2000">
          <FontFooter rotate="rotate(180deg)" writing="vertical-rl"className="title">{t("TitleIntro")}</FontFooter>
          <div className="info">
            <Fontp className="intro">{t("Intro")}</Fontp>
            <a href="mailto:hola@tailor-hub.com?subject=Colaboración%20🔥🏖🏖🏖🏖🔥%20Tailor"><Fonta>{t("Email")}</Fonta></a>
            <a href="tel:+34 652 916 505"><Fonta>{t("Tel")}</Fonta></a>
          </div>
        </div>

        <div className="container2"data-aos="fade-in" data-aos-duration="2500">
          <FontFooter rotate="rotate(180deg)" writing="vertical-rl"className="title">{t("TitleSocial")}</FontFooter>
          <div className="info">
            <a href="https://www.linkedin.com/company/tailor-hub/" target="_blank"><Fonta>{t("Linkedin")}</Fonta></a>
            <a href="https://www.instagram.com/tailor_hub" target="_blank"><Fonta>{t("Instagram")}</Fonta></a>
          </div>
        </div>

        <div className="container3"data-aos="fade-in" data-aos-duration="3000">
          <FontFooter rotate="rotate(180deg)" writing="vertical-rl"className="title">{t("TitleOffice")}</FontFooter>
          <a target="_blank" href="https://goo.gl/maps/U9y3P7DkWtoMrcaK8" target="_blank"><Fonta className="direction">{t("Direction")}</Fonta></a>
        </div>

      </div>
    </ContactStyle>
  );
};

export default withTranslation("ContactNavFooter")(Contact);