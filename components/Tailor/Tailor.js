import React from "react";

import { TailorStyle } from "./TailorStyle";
import Fontp from "../../styles/fontsStyles/Fontp";

const Tailor = props => {
    return (
        
        <TailorStyle>
            <div>
                <img className="logo" src="/static/svg/whiteLogoTailor.svg"></img>
                <Fontp color="white">Creating meaningful products</Fontp>
            </div>
        </TailorStyle>

    ); 
  };
  
  export default Tailor;