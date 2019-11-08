import React from "react";

import { HowDoStyle } from "./HowdoStyle";
import Fonth1 from "../../styles/fontsStyles/Fonth1";
import FontP from "../../styles/fontsStyles/Fontp";

import { withTranslation} from '../../i18n'


const HowDo = props => {
    const { t } = props; 
    
    return (
        <HowDoStyle data-aos="fade-in" data-aos-duration="1000">
            <div className="global">
                <div className="conteiner1" data-aos="fade-in" data-aos-duration="1000">
                    <Fonth1 className="title">{t('pageTitle5')}</Fonth1>
                    <div className="text1">
                        <FontP>{t('pageTitle5Info1')}</FontP>
                        <FontP>{t('pageTitle5Info2')}</FontP>
                    </div>
                    <div className="text2" data-aos="fade-in" data-aos-duration="1000">
                        <img className="imgValors" src="/static/img/imgValuesTailor.jpg"></img>
                    </div>
                </div>
            </div>
        </HowDoStyle>

    ); 
  };
  

  export default withTranslation('Home')(HowDo);
