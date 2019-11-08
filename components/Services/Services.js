import React from "react";

import { ServicesStyle } from "./ServicesStyle";
import Fonth1 from "../../styles/fontsStyles/Fonth1";

import { withTranslation} from '../../i18n'


const Tailor = props => {
    const { t } = props; 

    return (
        
        <ServicesStyle>
            <div className="global">
                <Fonth1 className="title">{t('pageTitle4')}</Fonth1>
                <div className="svg">
                    <img className="scroll1" src="/static/svg/services/scroll1.svg"></img>
                    <img className="scroll2" src="/static/svg/services/scroll2.svg"></img>
                    <img className="scroll3" src="/static/svg/services/scroll3.svg"></img>
                    <img className="scroll4" src="/static/svg/services/scroll4.svg"></img>
                </div>  
            </div>
        </ServicesStyle>

    ); 
  };

  export default withTranslation('Home')(Tailor);

