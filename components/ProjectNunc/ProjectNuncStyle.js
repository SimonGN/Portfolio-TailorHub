import styled from 'styled-components';

const ProjectNuncStyle = styled.div`
  background: white;
  width: 100vw;
  height: 100%;
  a {
    color: black;
  }
  img {
    object-fit: cover;
  }
  .container1,
  .container2,
  .container5,
  .container6,
  .container7 {
    width: 94vw;
    margin: 0 auto;
    padding-bottom: 20%;
  }

  .imgHome {
    background-image: url("/static/img/projectNunc/homeNunc.gif");
    background-repeat: no-repeat;
    width:100vw;
    background-position-x: 76%;
    background-position-y: 60%;
    background-size: cover;
    animation: opacity 2s;
  }
  .logo {
    width: 60vw;
    margin-bottom: 10%;
  }
  .info {
    width: 90vw;
    margin: 0 auto;
    padding-top:110%;
    padding-bottom:10%;
    mix-blend-mode: difference;
  }
  .tec {
    padding-top: 25%;
    padding-bottom: 20%;
    display: flex;
    justify-content: center;
  }

  .container1 {
    margin-top: 10%;
  }
  .information {
    width: 93vw;
    margin: 0 auto;
    display: flex;
    margin-top: 10%;
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

  .animation {
    width: 100%;
    margin-bottom: 20%;
  }

  .container3 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 20%;

    img {
      position: relative;
    }
  }
  .img1,
  .img2,
  .img3,
  .img4 {
    width: 48%;
    height: 240px;
  }
  .img1,
  .img2 {
    margin-bottom: 4%;
  }


  .mockup{
    width: 160vw;
  }
  .description2{
    margin-bottom:20%
  }

  .esquemaMovil{
    width:100%;
  }
  .esquemaPc{
    width:100%;
    display:none;
  }


  .iphone{
    display:flex;
    align-items: center;
    flex-flow: column;
  }
  .description3 {
    margin-bottom: 20%;
  }
  .iphone2,
  .iphone1,
  .iphone3 {
    width: 75%;
  }
  .iphone2,
  .iphone1 {
    margin-bottom: 5%;
  }

  .container7 {
    height: 35vh;
    display: flex;
    align-items: center;
  }
  .animation1,
  .animation2,
  .animation3,
  .animation4,
  .animation5,
  .animation6,
  .animation7,
  .animation8,
  .animation9 {
    position: absolute;
    width: 40%;
  }
  .animation1 {
    width: 30%;
    left: 51%;
    margin-top: 33%;
  }
  .animation2 {
    margin-top: -12%;
    width: 30%;
    left: 7%;
  }
  .animation3 {
    margin-top: -16%;
    left: 56%;
    z-index: 1;
  }
  .animation4 {
    margin-top: 26%;
    width: 20%;
  }
  .animation5 {
    width: 8%;
    left: 87%;
    margin-top: 33%;
  }
  .animation6 {
    width: 6%;
    margin-top: 8%;
    left: 6%;
  }
  .animation7 {
    width: 10%;
    margin-top: 36%;
    left: 32%;
  }
  .animation8 {
    width: 6%;
    left: 85%;
    margin-top: 7%;
  }

  .animation9 {
    width: 70%;
    left: 16%;
  }

  .description5{
    text-align:center;
    padding-top:20%;
  }
  .animationBouncing {
    -webkit-animation: bounce 15.5s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: bounce 15.5s infinite;
    animation-fill-mode: forwards;
  }
  .animationBouncingReverse {
    -webkit-animation: bounce-reverse 11.5s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: bounce-reverse 11.5s infinite;
    animation-fill-mode: forwards;
  }
  .animationBouncing2 {
    -webkit-animation: bounce2 20.5s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: bounce2 20.5s infinite;
    animation-fill-mode: forwards;
  }
  .animation2BouncingReverse {
    -webkit-animation: bounce2-reverse 7.5s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: bounce2-reverse 7.5s infinite;
    animation-fill-mode: forwards;
  }

  .sizeAnimation {
    -webkit-animation: size-animation 10s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: size-animation 10s infinite;
    animation-fill-mode: forwards;
  }

  .sizeReverseAnimation {
    -webkit-animation: size-reverse-animation 12s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: size-reverse-animation 12s infinite;
    animation-fill-mode: forwards;
  }

  @-webkit-keyframes bounce {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @-webkit-keyframes bounce2 {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-8%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes bounce2 {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-8%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @-webkit-keyframes bounce-reverse {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(3%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes bounce-reverse {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(3%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @-webkit-keyframes bounce2-reverse {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(6%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes bounce2-reverse {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(6%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @-webkit-keyframes size-animation {
    0% {
      transform: scale(1.4);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1.4);
    }
  }

  @keyframes size-animation {
    0% {
      transform: scale(1.4);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1.4);
    }
  }

  @-webkit-keyframes size-reverse-animation {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(0.9);
    }
  }

  @keyframes size-reverse-animation {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(0.9);
    }
  }

  @-webkit-keyframes opacity {
    1% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes opacity {
    1% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  #video{
    width: 380px !important;
    height: 290px!important;
    padding-bottom:20%;
    margin: 0 auto;
    pointer-events: none!important;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .esquemaMovil{
      display:none;
    }
    .esquemaPc{
      display:block;
      width:100%;
    }
    .imgHome{
      width:100vw;
      background-position-x: 75%;
      background-position-y: 50%;
    }
    .logo {
      width: 30vw;
      margin-bottom: 10%;
    }
    .info {
      width: 90vw;
      margin: 0 auto;
      padding-top: 80%;
      padding-bottom: 10%;
    }

    .container1 {
      padding-bottom: 15%;
    }

    .container2 {
      display: flex;
      align-items: center;
      padding-bottom: 10%;
    }
    .animation {
      width: 30%;
      object-fit: contain;
      padding: 0;
      margin: 0;
    }
    .description1 {
      margin-left: 8%;
    }

    .container3 {
      display: flex;
      align-items: center;
      padding-bottom: 20%;

      img{
        margin:0;
      }
    }
    .img1,
    .img2,
    .img3,
    .img4 {
      width: 23%;
    }

    .iphone {
      flex-flow: row;
      justify-content: center;
    }
    .iphone1,
    .iphone2,
    .iphone3 {
      width: 30%;
      margin-bottom: 0;
    }
    .iphone1 {
      z-index: 1;
      position: absolute;
    }
    .iphone2 {
      margin-right: 10%;
    }

    .container6 {
      padding-bottom: 20%;
    }

    .container7 {
      height: 67vh;
    }

    .animation5 {
      width: 5%;
    }
    .animation7 {
      width: 6%;
      margin-top: 36%;
      left: 35%;
    }
    .description3{
      p{
        padding-bottom:0%;
      }
    }
    .description5{
      padding-top:10%;
    }
    #video{
      width: 600px !important;
      height: 700px!important;
      padding-bottom:0;
      padding-bottom:7%;
      margin: 0 auto;
      pointer-events: none!important;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .container1{
      padding-bottom:18%;
    }
    .mockup{
      display:block;
      width: 100vw;
    }
    .esquemaMovil{
    display:none;
    }
    .esquemaPc{
      width:100%;
    }
    .imgHome{
      background-position-x: 74%;
      background-position-y: 10%;
    }
    .logo {
      width: 30vw;
      margin-bottom: 10%;
    }
    .info{
      width:94vw;
      padding-top:20%;
      padding-bottom:10%;
      h1{
        width:65%;
      }
    }

    .information {
      position: relative;
      margin: 0;
      z-index: 1;
      width: 94vw;
      margin: 0 auto;
      div {
        width: 23%;
        margin-bottom: 0;
      }
    }
    .infomationStye {
      display: flex;
      align-items: center;
    }
    .info2 {
      margin-left: 7%;
    }

    .container2 {
      display: flex;
      align-items: center;
      padding-bottom: 8%;
    }
    .animation {
      width: 30%;
      object-fit: contain;
      padding: 0;
      margin: 0;
    }
    .description1 {
      margin-left: 10%;
    }

    .container3 {
      display: flex;
      align-items: center;
      padding-bottom: 18%;
    }
    .img1,
    .img2,
    .img3,
    .img4 {
      width: 23%;
      height: auto;
    }

    .container4,
    .container5,
    .container6 {
      display: flex;
      flex-flow: column;
      align-items: center;
    }

    .description2,
    .description3,
    .description4,
    .description5 {
      width: 70%;
    }
    .description3 {
      margin-bottom: 10%;
    }
    .description5{
      padding-bottom:20%;
      p{
        padding-top:15%;
      }
    }

    .iphone {
      flex-flow: row;
      justify-content: center;
    }
    .iphone1,
    .iphone2,
    .iphone3 {
      width: 60%;
      margin-bottom: 0;
    }
    .iphone1 {
      width: 28%;
      z-index: 1;
      position: absolute;
    }
    .iphone2 {
      margin-right: 10%;
    }

    .container6 {
      padding-bottom: 14%;
    }

    .container7 {
      height: 60vh;
      padding-top:25%;
      padding-bottom:50%;
    }
    .animation5 {
      width: 5%;
    }
    .animation7 {
      width: 6%;
      margin-top: 36%;
      left: 35%;
    }
    #video{
      width: 800px !important;
      height: 800px!important;
      padding-bottom:0;
      padding-bottom:7%;
      margin: 0 auto;
      pointer-events: none!important;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .imgHome{
      background-position-x: 58%;
    background-position-y: 41%;
    }
    .logo {
      width: 20vw;
      margin-bottom: 5%;
    }
    .info {
      width: 80vw;
      padding-top: 33%;
      padding-bottom: 10%;
      h1 {
        width: 52%;
      }
    }

    
    .container2,
    .container3,
    .container4,
    .container5,
    .container6,
    .container7 {
      padding-bottom: 20%;
    }
    .container1{
      padding-bottom: 17%;
    }
    .tec {
      padding: 0;
    }

    .mockup{
      width: 100vw;
    }
    .esquemaMovil{
      display:none;
    }
    .esquemaPc{
      display:block;
      width:100%;
    }

    .tec{
      width:40%;
    }

    .information {
      position: relative;
      margin: 0;
      z-index: 1;
      width: 80vw;
      margin: 0 auto;
      div {
        width: 20%;
        margin-bottom: 0;
      }
    }
    .infomationStye {
      display: flex;
      align-items: center;
    }
    .info2 {
      margin-left: 7%;
    }
    .container2 {
      width: 65vw;
      display: flex;
      align-items: center;
      padding-bottom:5%;
    }

    .animation {
      width: 30%;
      object-fit: contain;
      padding: 0;
      margin: 0;
    }
    .description1 {
      margin-left: 10%;
    }

    .container3 {
      display: flex;
      align-items: center;
      padding-bottom: 17%;
    }

    .img1,
    .img2,
    .img3,
    .img4 {
      width: 23%;
      height: auto;
    }
    .container5{
      padding-bottom: 15%;
    }
    .container4,
    .container5,
    .container6 {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .container6 {
      a{
        padding-top:5%;
      }
      padding-bottom: 17%;
    }
    .description2,
    .description3,
    .description5,
    .description4 {
      width: 55%;
    }
    .description3 {
      margin-bottom: 10%;
    }

    .iphone {
      flex-flow: row;
      justify-content: center;
    }
    .iphone1,
    .iphone2,
    .iphone3 {
      width: 60%;
      margin-bottom: 0;
    }
    .iphone1 {
      width: 21%;
      z-index: 1;
      position: absolute;
    }
    .iphone2 {
      margin-right: 10%;
    }

    .container7 {
      height: 95vh;
      padding-bottom: 24%;
    }

    .animation1 {
      width: 24%;
      left: 55%;
      margin-top: 23%;
    }
    .animation2 {
      margin-top: -16%;
      width: 20%;
      left: 18%;
    }
    .animation3 {
      width: 28vw;
      margin-top: -17%;
      left: 61%;
    }
    .animation4 {
      margin-top: 19%;
      left: 9%;
    }
    .animation5 {
      width: 3%;
      left: 87%;
      margin-top: 23%;
    }
    .animation6 {
      width: 4%;
      margin-top: 1%;
      left: 14%;
    }
    .animation8 {
      width: 4%;
      left: 80%;
      margin-top: 2%;
    }
    .animation7 {
      width: 3%;
      margin-top: 26%;
      left: 41%;
    }
    .animation9 {
      width: 56%;
      left: 20%;
    }
    #video{
      width: 800px !important;
      height: 800px!important;
      padding-bottom:0;
      padding-bottom:7%;
      margin: 0 auto;
      pointer-events: none!important;
    }
  }
  @media only screen and (min-width: 1441px) {
    .mockup{
      width: 100vw;
    }
    .esquemaMovil{
      display:none;
    }
    .esquemaPc{
      display:block;
      width:100%;
    }
    .imgHome{
      background-position-x: 55%;
      background-position-y: 48%;
    }
    .logo{
      mix-blend-mode:screen;
      width:10vw;
      margin-bottom:3%;
    }
    .info{
      width:80vw;
      padding-top:25%;
      padding-bottom:5%;
      h1{
        width:45%;
        mix-blend-mode:screen;
      }
    }
    .container1{
      padding-bottom: 12%;
    }
    
    .container3,
    .container4,
    .container5,
    .container6,
    .container7 {
      padding-bottom: 15%;
    }
    .container2{
      padding-bottom:9%;
    }
    #video{
      width: 900px !important;
      height: 800px!important;
      padding-bottom:0;
      padding-bottom:7%;
      margin: 0 auto;
      pointer-events: none!important;
    }
    .tec{
      width:40%;
    }

    .information {
      position: relative;
      margin: 0;
      z-index: 1;
      width: 80vw;
      margin: 0 auto;
      div {
        width: 20%;
        margin-bottom: 0;
      }
    }
    .infomationStye {
      display: flex;
      align-items: center;
    }
    .info2 {
      margin-left: 7%;
    }
    .container2 {
      width: 65vw;
      display: flex;
      align-items: center;
      div{
        margin-left:5%;
      }
    }

    .animation {
      width: 30%;
      object-fit: contain;
      padding: 0;
      margin: 0;
    }
    .description1 {
      margin-left: 5%;
    }

    .container3 {
      display: flex;
      align-items: center;
      margin-bottom: 0;
    }
    .img1,
    .img2,
    .img3,
    .img4 {
      width: 23%;
      height: auto;
    }

    .container4,
    .container5,
    .container6 {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding-bottom:10%;
    }
    .container6 {
      padding-bottom: 10%;
      p{
        padding-bottom:5%;
      }
    }
    .description2,
    .description3,
    .description5,
    .description4 {
      width: 55%;
    }
    .description3{
      margin-bottom: 10%;
    }
    .iphone{
      flex-flow:row;
      justify-content:center;
    }
    .iphone1,
    .iphone2,
    .iphone3 {
      width: 60%;
      margin-bottom: 0;
    }
    .iphone1{
      width: 15%;
      z-index:1;
      position:absolute;
    }
    .iphone2 {
      margin-right: 10%;
    }
    .container6{
      padding-bottom: 29%;
    }
    .container7{
      height: 85vh;
      padding-bottom: 36%;
    }
    .animation1 {
      width: 15%;
      left: 58%;
      margin-top: 20%;
    }
    .animation2 {
      margin-top: -15%;
      width: 15%;
      left: 25%;
    }
    .animation3 {
      width: 20vw;
      margin-top: -17%;
      left: 65%;
    }
    .animation4 {
      margin-top: 17%;
      left: 15%;
      width: 15%;
    }
    .animation5 {
      width: 3%;
      left: 80%;
      margin-top: 15%;
    }
    .animation6 {
      width: 2%;
      margin-top: 0%;
      left: 22%;
    }
    .animation7 {
      width: 2%;
      margin-top: 20%;
      left: 41%;
    }
    .animation8 {
      width: 3%;
      left: 77%;
      margin-top: 2%;
    }
    .animation9 {
      width: 50%;
      left: 25%;
    }
  }
`;

export { ProjectNuncStyle };
