import styled from 'styled-components';

const ProjectVasaltoStyle = styled.div`
  background-color: white;
  #video{
    width: 500px !important;
    height: 300px!important;
    padding-bottom:10%;
    margin: 0 auto;
    pointer-events: none!important;
  }
 
  iframe{
    border: none;
    pointer-events: none!important;
  }
  .container1{
    width: 93vw;
    margin:0 auto;
  }
  .textInfo{
    margin-bottom:10%;
    width:0 margin;
  }
  .container2, .container3, .container4{
    width: 93vw;
    margin: 0 auto;
  }

  .information{
    width: 94vw;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top:10%;
    margin-bottom:20%;
    div {
      width: 40%;
      text-align: left;
      margin-bottom: 3%;
    }
  }
  img{
    width:100%;
  }
  .mockupPC{
    display:none;
  }
  .textImg{
    p{
      margin-bottom:20%;
    }
    .img1{
      margin-bottom:20%;
    }
    #video {
      width: 761px !important;
      height: 650px!important;
      padding-top: 8%;
      padding-bottom: 10%;
    }
  }
  @media only screen and (min-width: 415px) and (max-width: 768px) {
    #video {
      width: 761px !important;
      height: 650px!important;
      padding-top: 8%;
      padding-bottom: 10%;
    }
    .information{
      margin-top:10%;
      margin-bottom:15%;
    }
    .containerDos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10%;
      .text{
        width:50%;
        margin-right:5%;
      }
      p{
        width:100%;
      }
    }

    .container2{
      margin-bottom:15%;
      margin-bottom:15%;
    }
    .mockupMovil{
      display:none;
    }
    .mockupPC{
      display:block;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    #video {
      width: 1000px !important;
      height: 850px!important;
      padding-top: 8%;
      padding-bottom: 5%;
    }
    .container1 {
      width: 80vw;
      margin-bottom:15%;
    }
    .container1,
    .containerDos {
      display: flex;
      align-items: center;
    }
    .information{
      margin-top:0%;
      margin-bottom:0%;
      div{
        margin-bottom: 10%;
      }
    }
    .infomationStye{
      display: flex;
      align-items: center;
      margin-top:0%;
      margin-bottom:0%;

      h1{
        margin-right: 5%;
      }

    }
    .containerDos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10%;
      .text{
        width:50%;
        margin-right:5%;
      }
      p{
        width:100%;
      }
    }
    .mockupMovil{
      display:none;
    }
    .mockupPC{
      display:block;
    }
    .container2, .container3, .container4{
      width:80%;
      margin: 0 auto;
    }
    .img2{
      position:relative;
    }
    .textFly{
      top:30%;
      left: 6%;
      width:36%;
      position: absolute;
      z-index:1;
      background-color:white;
      padding:4%;
      opacity: 0.9;
      p{
        margin:0;
      }
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    #video {
      width: 1000px !important;
      height: 800px!important;
      padding-top: 0%;
      padding-bottom: 0%;
    }
    .title{
      width: 160%;
    }
    .container1 {
      width: 80vw;
    }
    .container1,
    .containerDos {
      display: flex;
      align-items: center;
    }
    .information{
      margin-top:8%;
      margin-bottom:10%;
      div{
        margin-bottom: 10%;
      }
    }
    .infomationStye{
      display: flex;
      align-items: center;
      margin-top:0%;
      margin-bottom:0%;

      h1{
        margin-right: 5%;
      }

    }
    .containerDos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10%;
      .text{
        width:50%;
        margin-right:5%;
      }
      p{
        width:100%;
      }
    }
    .mockupMovil{
      display:none;
    }
    .mockupPC{
      display:block;
    }
    .img2{
      position:relative;
    }
    .textFly{
      top:40%;
      left: 21%;
      width:36%;
      position: absolute;
      z-index:1;
      background-color:white;
      padding:4%;
      opacity: 0.9;
      p{
        margin:0;
      }
    }
  }
  @media only screen and (min-width: 1441px) {
    #video {
      width: 1000px !important;
      height: 654px!important;
      padding-top: 4%;
      padding-bottom: 0;
    }
    .title{
      width: 100%;
      margin-right:10%;
    }
    .container1 {
      width: 80vw;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .container2, .container3, .container4{
    width: 50%;
    margin: 0 auto;
  }
    .container1,
    .containerDos {
      display: flex;
    }
    .information{
      margin-top:8%;
      margin-bottom:10%;
      div{
        margin-bottom: 10%;
      }
    }
    .infomationStye{
      display: flex;
      align-items: center;
    }
    .infomationStye{
      display: flex;
      align-items: center;
      h1{
        margin-right: 5%;
      }
    }
    .containerDos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10%;
      .text{
        width:50%;
        margin-right:5%;
      }
      p{
        width:100%;
      }
    }
    .mockupMovil{
      display:none;
    }
    .mockupPC{
      display:block;
    }
    .img2{
      position:relative;
    }
    .textFly{
      top:40%;
      left: 21%;
      width:36%;
      position: absolute;
      z-index:1;
      background-color:white;
      padding:4%;
      opacity: 0.9;
      p{
        margin:0;
      }
    }
  }
`;

export default ProjectVasaltoStyle;
