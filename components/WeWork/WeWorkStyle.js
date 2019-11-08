import styled from 'styled-components';

const WeWorkStyle = styled.div`
  .conteiner1 {
    height: auto;
    margin: 0 auto;
    width: 94vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .conteiner2, .conteinerHiring {
    padding-bottom:25%;
    width: 94vw;
    margin: 0 auto;
  }
  .conteiner2{
    padding-top:25%;
    display:flex;
    flex-flow:column;
  }

  .title2{
    order:1;
  }
  .paragraph2{
    order:3;
  }
  .conteinerHiring {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .title1, .title2 {
    margin-bottom: 8%;
  }
  .imgs1 {
    width: 106vw;
    margin-left: -9%;
    margin-bottom: -15%;
  }
  .imgs2 {
    width: 94vw;
    margin-bottom: 5%;
    order:2;
  }
  p {
    margin-bottom: 5%;
  }
  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .paragraph2 {
      width: 94vw;
      margin: 0 auto;
      display: flex;
      margin-top:3%;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 45%;
       text-align: left;
      }
    }

  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    
    .conteiner2{
      padding-top:20%;

      padding-bottom:20%;
      position:relative;
    }
    .info1 {
      display: flex;
      align-items: center;
    }
    .title1 {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin-bottom: 0;
    }
    .title2{
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      position: absolute;
      right: 44%;
      top: 62%;
    }
    .conteinerHiring{
      width: 80%;
      margin: 0 auto;
    }
    .paragraph2 {
      width: 85vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 41%;
        text-align:left;
      }
    }
    .img2{
      margin-bottom: 5%;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
   
    .conteiner1 {
      width: 80vw;
      display: flex;
      flex-flow: row;
      align-items: center;
    }
    .conteiner2{
      text-align:center;
      position:relative;
      padding-bottom:20%;
      padding-top:20%;


    }
    .conteinerHiring{
      width: 80%;
      margin: 0 auto;
    }
    p {
      margin-bottom: 5%;
    }
    .info1 {
      display: flex;
      align-items: center;
    }
    .title1 {
      width:28%;
      margin-left: 0;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin-left: -7%;
    }
    .title2{
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      position: absolute;
      right: 46%;
      top: 63%;
    }
    .imgs1 {
      width: 93%;
      margin-left: -45%;
      margin-bottom: -15%;
    }
    .imgs2{
      margin: 0 auto;
      width: 85%;
      margin-bottom: 5%;
    }
    .paragraph1{
      margin-left: 3%;
    }
    .paragraph2 {
      width: 70vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 41%;
        text-align:left;
      }
    }
  }
  @media only screen and (min-width: 1441px) {
   
    .conteiner1 {
      width: 80vw;
      display: flex;
      flex-flow: row;
      align-items: center;
    }
    .conteiner2{
      text-align:center;
      position:relative;
      padding-bottom:10%;
      padding-top:20%;
    }
    .conteinerHiring{
      width: 80%;
      margin: 0 auto;
      padding-bottom: 20%;
    }
    p {
      margin-bottom: 5%;
    }
    .info1 {
      display: flex;
      align-items: center;
    }
    .title1 {
      margin-left: 0;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin-left: 5%;
      margin-bottom: 0%;
      

    }
    .title2{
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      position: absolute;
      right: 46.4%;
      top: 71%;
    }
    .imgs1 {
      width: 93%;
      margin-left: -28%;
      margin-bottom: -15%;
    }
    .imgs2{
      margin: 0 auto;
      width: 80%;
      margin-bottom: 5%;
    }
    .paragraph1{
      padding-left: 4%;
    }

    .conteinerHiring{
      width: 75vw;
      margin: 0 auto;
    }

    .paragraph2 {
      width: 70vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 41%;
        text-align:left;
      }
    }
  }

`;

export { WeWorkStyle };