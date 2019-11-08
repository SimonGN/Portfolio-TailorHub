import React from "react";
import Link from "next/link";

import { LabStyle } from "./LabStyle";
import Fontp from "../../styles/fontsStyles/Fontp";
import Fonta from "../../styles/fontsStyles/Fonta"




import { withTranslation } from "../../i18n";

const Lab = props => {
  const { t } = props;

  return (
    <LabStyle>
      <div className="global">

        <div className="container1">
          <Fontp className="parraf1">{t("pageDescription1")}</Fontp>
          <Fontp className="parraf2">{t("pageDescription2")}</Fontp>
          <Fontp className="parraf3">{t("pageDescription3")}</Fontp>
          <a href="mailto:hola@tailor-hub.com"><Fonta className="parraf4">{t("pageDescription4")}</Fonta></a>

        </div>

      </div>
    </LabStyle>
  );
};

export default withTranslation("Lab")(Lab);