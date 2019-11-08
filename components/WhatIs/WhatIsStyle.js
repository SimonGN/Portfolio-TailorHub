import styled from 'styled-components';

const WhatIsStyle = styled.div`
  width: 100vw;
  img{
    object-fit:cover
  }
  .global {
    width: 93vw;
    height: auto;
    padding-top: 25%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .title {
    margin-bottom: 8%;
  }
  .imgGlobal {
    width:100%;
    display: flex;
    padding-bottom: 12%;
    justify-content: center;
    flex-direction: column;
  }
  .img1,.img2,.img3,.img4 {
    width:40%;
    height:auto;
    max-height:200px;
  }
  .img12,.img34 {
    display: flex;
    justify-content: center;
  }
  .img1,.img3 {
    margin-right: 4%;
  }
  .img2, .img1{
    margin-bottom: 4%;
  }
  p{
    margin-bottom:5%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .global {
      height: auto;
      padding-top:15%;
    }
    .img1,.img2,.img3,.img4 {
      width: 30%;
      height:auto;
      max-height:300px;
    }
    .img1, .img3 {
      margin-right: 2%;
    }
    .img2, .img1 {
      margin-bottom: 2%;
    }
    .title {
      margin-bottom: 6%;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .global {
      display: flex;
      flex-direction: row;
      align-items:center;
      width: 80vw;
      height: auto;
      margin: 0 auto;
      padding-top: 12%;
    }
    .imgGlobal {
      width:45%;
      padding: 0;
    }
    .img1,.img2,.img3,.img4 {
      width: 17vw;
      max-height:200px;
    }
    .img1,.img3 {
      margin-right:3%;
    }
    .img2 , .img1{
      margin-bottom: 3%;
    }
    .title {
      width:14%;
      display:flex;
      text-align:center;
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin:0;
      padding:0;
    }
    .textWhatis {
      width:45%;
      display: flex;
      flex-flow: row;
      align-items: center;
      width: 60vw;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .global {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items:center;
      width: 80vw;
      height: auto;
      margin: 0 auto;
      padding-top: 12%;
    }
    .imgGlobal {
      padding: 0;
      width: 39%;
    }
    .img1,.img2,.img3,.img4 {
      width:17.5vw;
      max-height:350px;
    }
    .img1,.img3 {
      margin-right:3%;
    }
    .img2 , .img1{
      margin-bottom: 3%;
    }
    .title {
      width:12%;
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin:0;
      padding:0;
    }
    .text{
      width: 44%;
    }
  }
  @media only screen and (min-width: 1441px) {
    .global {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items:center;
      width: 80vw;
      height: auto;
      margin: 0 auto;
      padding-top: 12%;
    }
    .imgGlobal {
      padding: 0;
      width:45%;
    }
    .img1,.img2,.img3,.img4 {
      width:15vw;
      max-height:350px;
    }
    .img1,.img3 {
      margin-right:3%;
    }
    .img2 , .img1{
      margin-bottom: 3%;
    }
    .title {
      width:7%;
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin:0;
      padding:0;
      
    }
    .text{
      width: 44%;
      margin-left: 3%;

    }
  }
`;

export { WhatIsStyle };
