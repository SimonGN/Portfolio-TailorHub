import styled from 'styled-components';

const WhatIsStyle = styled.div`
  width: 100vw;
  margin-bottom:100px;
  img{
    object-fit:cover
  }
  p{
    margin-bottom:10px;
  }
  .global {
    width: 93vw;
    height: auto;
    padding-top: 70px;

    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .title {
    margin-bottom: 15px;
  }
  .imgGlobal {
    width:100%;
    display: flex;
    padding-bottom: 30px;
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


  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .global {
      height: auto;
      padding-top: 80px;
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
      margin-bottom: 20px;
    }
    p{
    margin-bottom:15px;
  }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin-top:130px;
    margin-bottom:130px;
    .global {
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content: space-between;
      width: 80vw;
      height: auto;
      margin: 0 auto;
      padding:0;

    }
    .imgGlobal {
      width:40%;
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
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
    }
    .text{
      width:40%;
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
      align-items:center;
      justify-content: space-between;
      width: 75vw;
      height: auto;
      margin: 0 auto;
      padding-top: 12%;
    }
    .imgGlobal {
      padding: 0;
      width: 40%;
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
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin-left: 3%;
    }
    .text{
      width: 40%;
    }
  }
  @media only screen and (min-width: 1441px) {
    margin-bottom: 150px;
    .global {
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content: space-between;
      width: 65vw;
      height: auto;
      margin: 0 auto;
      padding-top: 12%;
    }
    .imgGlobal {
      padding: 0;
      width:40%;
    }
    .img1,.img2,.img3,.img4 {
      width:13vw;
      max-height:280px;
    }
    .img1,.img3 {
      margin-right:3%;
    }
    .img2 , .img1{
      margin-bottom: 3%;
    }
    .title {
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin-left: 3%;
    }
    .text{
      width: 40%;
      margin-left: 1%;


    }
  }
`;

export { WhatIsStyle };
