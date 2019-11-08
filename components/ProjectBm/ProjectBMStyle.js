import styled from 'styled-components';

const ProjectBMStyle = styled.div`
  background-color: black;
  img{
    object-fit:cover;
  }
  .imgMovil {
    width: 75vw;
    margin-top: 20%;
    margin-left: 10%;
    position: relative;
    z-index: 0;
  }

  .container1 {
    width: 93vw;
    margin: 0 auto;
  }
  .logoBm {
    display: none;
  }
  .title {
    position: absolute;
    top: 80%;
    left: 4%;
    z-index: 1;
  }
  .textInfo1,.textInfo2 {
    width: 93vw;
    margin: 0 auto;
    margin-top: 20%;
    margin-bottom: 30%;
  }
  .information {
    width: 93vw;
    margin: 0 auto;
    display: flex;
    margin-top: 10%;
    margin-bottom: 10%;
    justify-content: space-between;
    flex-wrap: wrap;
    div {
      width: 40%;
      text-align: left;
    }
  }
  .infomationStye {
    margin-bottom: 5%;
  }
  
  .imgs{
    width:100vw;
    display:flex;
    padding-bottom:40%;
  }
  .img1, .img2, .img3, .img4{
    width:90%;
  }
  .parallax-outer{
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }



  .container3 {
    width: 94vw;
    margin: 0 auto;
  }
  .img5 {
    width: 94vw;
    margin: 0 auto;
    margin-bottom: 15%;
  }
  .logoBm {
    display: none;
  }
  .imgsIphone {
    width: 80vw;
    margin: 0 auto;
  }
  .img6,.img7,.img8 {
    width: 80vw;
    margin-bottom: 30%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
   .imgMovil{
    width: 40vw;
    margin-left: 32%;
   }
   .container1{
    width:94%;
    position: absolute;
    top: 70%;
    left: 4%;
   }
   .title {
      z-index: 1;
    }
    .information{
      margin-top: 5%;
    }
    .container3 {
      width: 94vw;
      margin: 0 auto;
    }
    .imgs{
    padding-bottom:30%;
  }
    .img5 {
      width: 50vw;
      margin-bottom: 10%;
      display: flex;
    }

    .imgsIphone {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
    .img6,.img8 {
      width: 30vw;
      margin-bottom: 30%;
    }
    .img6{
      margin-right: 12%;
    }
    .img8{
      margin-left:12%;
    }
    .img7{
      width: 32vw;
      position: absolute;
      margin-top:2%;
      z-index:1;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .imgMovil {
      margin: 0;
      margin-top:15%;
      width: 45vw;
    }
    .container1 {
      width: 100vw;
      display: flex;
      flex-flow: column-reverse;
    }
    .title {
      width: 40vw;
      top: 30%;
      left: 50%;
    }
    .logoBm {
      display: initial;
    }
    .infomationStye {
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .textInfo1{
      margin-top:0;
    }
    .information {
      position: absolute;
      z-index: 1;
      width: 48vw;
      left: 50%;
      top: 38%;
      div {
        width: 40%;
      }
    }
    .info{
      margin-right:5%;
    }
    .imgs2 {
      width: 50vw;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
   }

    .container3 {
      display: flex;
      align-items: center;
      margin-bottom: 30%;
    }
    .imgs{
      padding-bottom: 20%;
    }
    .img5 {
      width: 35vw;
      margin: 0;
      margin-right: 5%;
    }
    .textInfo1{
      width:80vw;
    }
    .textInfo2 {
      width: 50vw;
      margin-top: 0;
      margin-bottom: 10%;
    }
    .logoBm {
      display: flex;
      margin: 0 auto;
    }

    .imgsIphone {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    .img6, .img8{
      width:29vw;
      max-height:470px;
    }
    .img6{
      margin-right: 12%;
      max-height:700px;
    }
    .img8{
      margin-left:12%;
      max-height:700px;
    }
    .img7{
      width: 32vw;
      position: absolute;
      margin-top:2%;
      z-index:1;
    }

  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .imgMovil {
      width: 37vw;
      margin-top: 10%;
      margin-left:3%;
    }
    .container1 {
      width: 100vw;
      display: flex;
      flex-flow: column-reverse;
    }
    .title {
      width: 50vw;
      margin-left: 40%;
      top: 40%;
    }
    .logoBm {
      display: initial;
    }
    .infomationStye {
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .information {
      position: absolute;
      z-index: 1;
      left: 44%;
      top: 55%;
      width: 50vw;
      div {
        width: 40%;
      }
    }
    .info{
      margin-right:5%;
    }
    .textInfo1{
      width: 55vw;
      margin-top:5%;
      margin-bottom: 20%;
    }

    .imgs2 {
      width: 50vw;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
   }

    .imgs{
      padding-bottom: 13%;
    }
    .img4 {
      width: 20vw;
    }
    .container3 {
      width:80%;
      display: flex;
      align-items: center;
      margin-bottom: 20%;
    }
    .img5 {
      width: 25vw;
      margin: 0;
      margin-right: 5%;
    }
    .textInfo2 {
      width: 50vw;
      margin-top: 0;
      margin-bottom: 10%;
    }
    .logoBm {
      display: flex;
      margin: 0 auto;
    }

    .imgsIphone {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    .img6, .img8{
      width:20vw;
      max-height: 580px;
    }
    .img6{
      margin-right: 12%;
    }
    .img8{
      margin-left:12%;
    }
    .img7{
      width: 25vw;
      position: absolute;
      margin-top: -4%;
      z-index:1;
    }


  }
  @media only screen and (min-width: 1441px) {
    .imgMovil {
      width: 25vw;
      margin-top: 10%;
    }
    .container1 {
      width: 100vw;
      display: flex;
      flex-flow: column-reverse;
    }
    .title {
      width: 50vw;
      margin-left: 40%;
      top: 40%;
    }
    .logoBm {
      display: initial;
    }
    .infomationStye {
      display: flex;
      align-items: center;
      justify-content: left;
    }
    .information {
      position: absolute;
      z-index: 1;
      left: 44%;
      top: 55%;
      width: 50vw;
      div {
        width: 40%;
      }
    }
    .info{
      margin-right:5%;
    }
    .textInfo1{
      width: 55vw;
      margin-top:5%;
      margin-bottom: 20%;
    }
  
    .imgs2 {
      width: 50vw;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
   }
   .imgs{
     padding-bottom:15%;
   }
  
    

    .container3 {
      width:80%;
      display: flex;
      align-items: center;
      margin-bottom: 20%;
    }
    .img5 {
      width: 25vw;
      margin: 0;
      margin-right: 5%;
    }
    .textInfo2 {
      width: 50vw;
      margin-top: 0;
      margin-bottom: 10%;
    }
    .logoBm {
      display: flex;
      margin: 0 auto;
    }
    .imgsIphone{
      width:50%;
      margin: 0 auto;
      display: flex;
    justify-content: center;
    }
    .img6, .img8{
      width:13vw;
      max-height:500px;
    }
    .img6{
      margin-right: 12%;
    }
    .img8{
      margin-left:12%;
    }
    .img7{
      width: 14vw;
      position: absolute;
      margin-top:0.5%;
      z-index:1;
    }
  }
`;

export { ProjectBMStyle };
