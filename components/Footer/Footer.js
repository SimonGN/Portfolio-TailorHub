import React, {useState} from "react";
import Link from "next/link";

import { FooterStyle } from "./FooterStyle";
import FontFooter from "../../styles/fontsStyles/FontFooter";
import Fontp from "../../styles/fontsStyles/Fontp";


import { i18n, withTranslation } from '../../i18n'

const changeLanguage = (language, setLangauge) => {
  i18n.changeLanguage(language)
  setLangauge(language)
} 


const Footer = props => {
  const { t } = props;
  const [language, setLangauge] = useState(i18n.language)
  return (
    <FooterStyle backgroundColor={props.backgroundColor} >
      <div className="column">
        <div className="footer1">
          <img className="logo" src="/static/svg/whiteLogoTailor.svg" />
          <div>
            <a target="_blank" href="https://goo.gl/maps/U9y3P7DkWtoMrcaK8"target="_blank"><FontFooter className="direction" color="white">{t("Direction")}</FontFooter></a>
            <a href="tel:+34 652 916 505"><FontFooter color="white">{t("Tel")}</FontFooter></a>
            <a href="mailto:hola@tailor-hub.com"><FontFooter color="white">{t("Email")}</FontFooter></a>
          </div>
        </div>
        <div className="footer2">
          <Fontp rotate="rotate(180deg)" writing="vertical-rl" color="white">Site Map</Fontp>
          <div>
          <a href="/"><FontFooter color="white">{t("Nav1")}</FontFooter></a>
          <a href="/lab"><FontFooter color="white">{t("Nav2")}</FontFooter></a>
          <a href="/contact"><FontFooter color="white">{t("Nav3")}</FontFooter></a>
          </div>
        </div>
        <div className="footer3">
          <Fontp rotate="rotate(180deg)" writing="vertical-rl" color="white">Idioma</Fontp>
          <div>
            <FontFooter className="animate" color="white" decoration={language === 'es' ? "underline": ""} cursor onClick={() => changeLanguage('es', setLangauge)}>Español</FontFooter>
            {/* <FontFooter className="animate" color="white" decoration={language === 'en' ? "underline": ""} cursor onClick={() => changeLanguage('en', setLangauge)}>English</FontFooter> */}
          </div>
        </div>
        <div className="footer4">
          <Fontp rotate="rotate(180deg)"writing="vertical-rl" color="white">RR SS</Fontp>
          <div>
            <a href="https://www.instagram.com/tailor_hub"target="_blank"><FontFooter color="white">Instagram</FontFooter></a>
            <a href="https://www.linkedin.com/company/tailor-hub/"target="_blank"><FontFooter color="white">LinkedIn</FontFooter></a>
          </div>
        </div>
      </div>

      <h3>
        Copyright © by Tailor hub S.L, 2019. All rights reserved. All materials
        on this website are intellectual property of Tailor hub S.L.
      </h3>
    </FooterStyle>
  );
};

export default withTranslation  ("ContactNavFooter") (Footer);
