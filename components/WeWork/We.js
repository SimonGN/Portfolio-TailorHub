import React from "react";
import { WeWorkStyle } from "./WeWorkStyle";

import FontTitle from "../../styles/fontsStyles/FontTitle";
import Fontp from "../../styles/fontsStyles/Fontp";
import Fonta from "../../styles/fontsStyles/Fonta";

import team from "../../content/team.json"

import { withTranslation} from '../../i18n'




const displayTeam = () => {
    return (
        team.map((member,i)=> {
            const  { name , cargo, linkedin } = member;
            return (
                <div key={i}>
                    <Fonta target="_blank" href={linkedin}>{name}</Fonta>                 
                    <Fontp>{cargo}</Fontp>
                </div>
            )
        })
    )
}

const We = props => {
    const { t } = props; 

    return (
        <WeWorkStyle>
            <div className="conteiner2">
                <img className="imgs2" src="/static/img/teamTailor.jpg"></img>
                <FontTitle className="title2">{t('pageTitle7')}</FontTitle>
                <div className="paragraph2">
                    
                    {displayTeam()}
                </div>
            </div>
            <div className="conteinerHiring">
                <Fonta>{t('pageTitle7Info1')} </Fonta>
                <a href="mailto:hola@tailor-hub.com?subject=Hi✌️%20querría%20trabajar%20con%20vosotros🔥🎉🔥"><Fonta>{t('pageTitle7Info2')}</Fonta></a>
            </div>

        </WeWorkStyle>
        
    );
};

export default withTranslation('Home')(We);



