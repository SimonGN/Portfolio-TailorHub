import React from "react";
import { WeWorkStyle } from "./WeWorkStyle";

import FontTitle from "../../styles/fontsStyles/FontTitle";
import Fontp from "../../styles/fontsStyles/Fontp";
import Fonta from "../../styles/fontsStyles/Fonta";

import { withTranslation} from '../../i18n'


const WeWork = props => {
    const { t } = props; 

    return (
        <WeWorkStyle data-aos="fade-in" data-aos-duration="1000">
            <div className="conteiner1">
                <img className="imgs1" src="/static/img/Ipad.png"></img>
                <div className="info1">
                    <FontTitle className="title1">{t('pageTitle3')}</FontTitle>
                    <div className="paragraph1">                        
                        <Fontp>{t('pageTitle3Info1')}</Fontp>
                        <Fontp>{t('pageTitle3Info2')}</Fontp>
                        <Fonta>{t('pageTitle3Info3')}</Fonta>
                    </div>
                </div>      
            </div>
        </WeWorkStyle>

    ); 
  };
  

  export default withTranslation('Home')(WeWork);