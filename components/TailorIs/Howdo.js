import React from "react";

import { HowDoStyle } from "./HowdoStyle";
import FontTitle from "../../styles/fontsStyles/FontTitle";
import FontP from "../../styles/fontsStyles/Fontp";

import { withTranslation} from '../../i18n'


const HowDo = props => {
    const { t } = props; 
    
    return (
        <HowDoStyle data-aos="fade-in" data-aos-duration="1000">
            <div className="global">
                <div className="conteiner1" data-aos="fade-in" data-aos-duration="1000">
                    <FontTitle className="title">{t('pageTitle5')}</FontTitle>
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
