import styled from 'styled-components';

const WeWorkStyle = styled.div`
padding-bottom:100px;
  p{
    margin-bottom:15px;
  }
  .conteiner1 {
    height: auto;
    margin: 0 auto;
    width: 94vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .conteiner2, .conteinerHiring {
    width: 94vw;
    margin: 0 auto;
  }
  .conteiner2{
    display:flex;
    flex-flow:column;
    padding-bottom:100px;
  }

  .title2{
    order:1;
  }
  .paragraph2{
    order:3;
    div{
      padding-bottom:10px;
      p{
        margin-bottom:0;
      }
    }
  }
  .conteinerHiring {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .title1, .title2 {
    margin-bottom: 20px;
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
  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .paragraph2 {
      width: 94vw;
      margin: 0 auto;
      display: flex;
      margin-top:0;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 45%;
       text-align: left;
      }
    }
    .info1{
      margin-top:-30px;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding-bottom: 130px;
    .conteiner2{
      padding-bottom:130px;
      position:relative;
    }
    .info1 {
      display: flex;
      align-items: center;
      margin-top: -30px;
      white-space: nowrap;
      width: 88vw;
      margin: 0 auto;
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
      right: 45%;
      top: 60.5%;
    }
    .conteinerHiring{
      width: 80%;
      margin: 0 auto;
    }
    .paragraph2 {
      width: 81vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 41%;
        text-align:left;
      }
    }
    .imgs2{
      margin-bottom: 50px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
   padding-bottom:130px;
    .conteiner1 {
      width: 80vw;
      display: flex;
      flex-flow: row;
      align-items: center;
    }
    .conteiner2{
      text-align:center;
      position:relative;
      padding-bottom:130px;
    }
    .conteinerHiring{
      width: 70%;
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
      margin-left: -13%;
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
    padding-bottom:150px;
    .conteiner1 {
      width: 80vw;
      display: flex;
      flex-flow: row;
      align-items: center;
    }
    .conteiner2{
      text-align:center;
      position:relative;
      padding-bottom:150px;
    }
    .conteinerHiring{
      width: 80%;
      margin: 0 auto;
    }
    p {
      margin-bottom: 15px;
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
      top: 61%;
    }
    .imgs1 {
      width: 93%;
      margin-left: -37%;
      margin-bottom: -15%;
    }
    .imgs2{
      margin: 0 auto;
      width: 70%;
      margin-bottom: 80px;
    }
    .paragraph1{
      padding-left: 4%;
    }

    .conteinerHiring{
      width: 65vw;
      margin: 0 auto;
    }

    .paragraph2 {
      width: 65vw;
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