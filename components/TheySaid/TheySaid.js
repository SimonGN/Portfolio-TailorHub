import React from "react";

import { TheySaidStyle } from "./TheySaidStyle";

import FontP from "../../styles/fontsStyles/Fontp";
import Fonth2 from "../../styles/fontsStyles/Fonth2"

import { TheySaidGalery } from "./TheySaidGalery";
import Slider from "react-slick";

import { withTranslation} from '../../i18n'


const TheySaid = props => {
    const { t } = props; 
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <TheySaidStyle>
            <div className="global">
                <div className="galery">
                    <div className="subTitle">
                        <Fonth2 color="white">{t('pageTitle9')}</Fonth2>
                    </div>
                    <TheySaidGalery className="infoClient">
                        <Slider {...settings}>
                            <div className="client">
                                <div className="embed-container">
                                    <iframe className="video" src="https://player.vimeo.com/video/356691025" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>
                                <div className="videoText">
                                    <FontP color="white">{t('pageTitle9Info1')}</FontP>
                                    <FontP className="nameText" color="white">{t('pageTitle9Name1')}</FontP>
                                </div>
                            </div>
                            <div className="client">
                                <div className="embed-container">
                                    <iframe className="video" src="https://player.vimeo.com/video/356692622" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </div>    
                                <div className="videoText">
                                <FontP color="white">{t('pageTitle9Info2')}</FontP>
                                <FontP className="nameText" color="white">{t('pageTitle9Name2')}</FontP>
                                </div>                            
                            </div>
                        </Slider>
                    </TheySaidGalery>
                </div>
                
            </div>
        </TheySaidStyle>

    );
};

export default withTranslation('Home')(TheySaid);