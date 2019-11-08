import React from "react";
import { WhatIsStyle } from "./WhatIsStyle";

import Fonth1 from "../../styles/fontsStyles/Fonth1";
import Fontp from "../../styles/fontsStyles/Fontp";

import { withTranslation } from "../../i18n";

const WhatIs = props => {
  const { t } = props;

  return (
    <WhatIsStyle>
      <div className="global">
        <div className="imgGlobal">
          <div className="img12"data-aos="fade-in" data-aos-duration="1000">
            <img className="img1" src="/static/img/whatis_1.jpg" />
            <img className="img2" src="/static/img/whatis_2.jpg" />
          </div>
          <div className="img34"data-aos="fade-in" data-aos-duration="1200">
            <img className="img3" src="/static/img/whatis_3.jpg" />
            <img className="img4" src="/static/img/whatis_4.jpg" />
          </div>
        </div>
        <div className="title">
          <Fonth1 >{t("pageTitle1")}</Fonth1>
        </div>
        <div className="text"data-aos="fade-in" data-aos-duration="2300">
            <Fontp>{t("pageTitle1Info1")}</Fontp>
            <Fontp>{t("pageTitle1Info2")}</Fontp>
            <Fontp>{t("pageTitle1Info3")}</Fontp>
          </div>
      </div>
    </WhatIsStyle>
  );
};

export default withTranslation("Home")(WhatIs);
