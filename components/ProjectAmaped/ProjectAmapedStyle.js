import styled from 'styled-components';

const ProjectAmapedStyle = styled.div`
  background: white;
  width: 100vw;
  height: 100%;
  img {
    object-fit: cover;
  }
  .imgHome {
    position: relative;
    height: 90vh;
    margin-bottom: 10%;
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
    -webkit-animation: bounce2-reverse 17.5s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: bounce2-reverse 17.5s infinite;
    animation-fill-mode: forwards;
  }

  .animationBouncing3 {
    -webkit-animation: bounce 18s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: bounce 18s infinite;
    animation-fill-mode: forwards;
  }

  .animation3BouncingReverse {
    -webkit-animation: bounce2-reverse 14.5s infinite;
    -webkit-animation-fill-mode: forwards;
    animation: bounce2-reverse 14.5s infinite;
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

  .img1,
  .img2,
  .img3,
  .img5 {
    position: absolute;
  }
  .img1 {
    width: 55%;
    top: 15%;
  }
  .img2 {
    width: 60%;
    top: 80%;
  }
  .img3 {
    width: 50%;
    top: 10%;
    left: 54%;
  }
  .img4 {
    display: none;
  }
  .img5 {
    width: 50%;
    top: 40%;
    left: 60%;
  }
  .logo {
    width: 30%;
    position: absolute;
    top: 58%;
    left: 12%;
  }

  .container1,
  .container2,
  .container3,
  .container4 {
    width: 93vw;
    margin: 0 auto;
  }
  .textInfo1,
  .textInfo3 {
    padding-bottom: 25%;
  }
  .textInfo2{
    padding-bottom: 10%;
  }
  .textInfo4 {
    padding-top:5%;
    padding-bottom: 15%;
  }
  .gif {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20%;
    padding-top: 0;
    img {
      padding-bottom: 10%;
      width: 20vh;
    }
    a {
      color: black;
      cursor: pointer;
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      padding-top: 5%;
      padding-bottom:10%;
    }
  }
  a {
  }

  .information {
    width: 94vw;
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
  .imgBranding {
    width: 100%;
    padding-bottom: 20%;
  }
  .blockBranding1,
  .blockBranding2,
  .blockBranding3 {
    display: flex;
    justify-content: space-between;
  }
  .blockBranding2,
  .blockBranding1 {
    margin-bottom: 2.5%;
  }
  .imgBranding1,
  .imgBranding7 {
    height: 100px;
    width: 37%;
  }
  .imgBranding2,
  .imgBranding6 {
    height: 100px;
    width: 60%;
  }
  .imgBranding3,
  .imgBranding4,
  .imgBranding5 {
    height: 100px;
    width: 31.3%;
  }

  .screen {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  .imgWeb1 {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20%;
    height: auto;
    max-height: 100%;
  }
  .ipad {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .imgWeb2,
  .imgWeb3 {
    width: 100vw;
    margin-left: -6%;
  }
  .video {
    padding-top:20%;
    padding-bottom: 20%;
    height: 350px;
  }

  .embed-container {
    position: relative;
    margin: 0 auto;
    padding-top:30%;
    padding-bottom: 70%;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @keyframes from-left-to-right {
    0% {
      opacity: 0;
      left: -600px;
      top: 0px;
    }
    100% {
      opacity: 1;
      left: 0px;
      top: 0px;
    }
  }
  @keyframes from-right-to-left {
    0% {
      opacity: 0;
      right: -800px;
      top: 0px;
    }
    100% {
      opacity: 1;
      right: 0px;
      top: 0px;
    }
  }
  .mockupScreen {
    padding-top: 10%;
    width: 100vw;
  }
  .mockup {
    width: 200%;
  }

  .fixed {
    position: fixed;
    bottom: 0;
    top: 1%;
    width: 93% !important;
    z-index: 1;
  }

  .fixed2 {
    position: absolute;
    top: none;
    bottom: 0;
    top: 68%;
    width: 100% !important;
  }
  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .imgHome {
      position: relative;
      height: 90vh;
      margin-bottom: 0;
    }
    .img1 {
      width: 35%;
      top: 10%;
      left: 45%;
    }
    .img2 {
      width: 40%;
      left: 15%;
      top: 68%;
    }
    .img3 {
      width: 30%;
      top: 39%;
      left: 2.3%;
    }
    .img4 {
      display: block;
      position: absolute;
      width: 30%;
      left: 85%;
      top: 15%;
    }
    .img5 {
      width: 33%;
      top: 50%;
      left: 63%;
    }
    .logo {
      width: 21%;
      position: absolute;
      top: 15%;
      left: 10%;
    }

    .information{
      margin-bottom:0;
    }
    .containerTres {
      position: relative;
      p{
        padding-bottom:15%;
      }
    }
    .containerDos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 15%;
      .text{
        width:50%;
        margin-right:5%;
      }
      p{
        width:100%;
      }
    }
    .textInfo2 {
      width: 45%;
      padding-bottom: 0;
    }
    .imgBranding {
      width: 50%;
      padding-bottom: 0;
    }
    .textInfo5 {
      padding-bottom: 20%;
    }
    .textInfo3 {
      padding-bottom: 10%;
    }

    .video {
      padding-top: 10%;
      padding-bottom: 15%;
      height: 650px !important;
    }
    .embed-container{
      padding-bottom: 65%;
    }
    .gif{
      padding-bottom:15%;
    }
    .webs {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .textInfo5 {
      padding-bottom: 5%;
    }
    .imgWeb1{
      padding-bottom:15%;
    }
    .imgWeb2,
    .imgWeb3 {
      width: 48%;
      position: relative;
      margin-left: 0;
      -webkit-animation-fill-mode: forwards;
    }
    .mockupScreen {
      padding-top: 0;
    }
    .container4{
      p{
        padding-top:0;
      }
    }
    .mockup{
      width:100%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .imgHome {
      margin-bottom: 0;
    }
    .img1 {
      width: 35%;
      top: 10%;
      left: 45%;
    }
    .img2 {
      width: 40%;
      left: 15%;
      top: 68%;
    }
    .img3 {
      width: 30%;
      top: 39%;
      left: 2.3%;
    }
    .img4 {
      display: block;
      position: absolute;
      width: 30%;
      left: 85%;
      top: 15%;
    }
    .img5 {
      width: 33%;
      top: 50%;
      left: 63%;
    }
    .logo {
      width: 21%;
      position: absolute;
      top: 15%;
      left: 10%;
    }

    .textInfo1,
    .textInfo2,
    .textInfo3,
    .textInfo4,
    .textInfo5 {
      width: 75%;
      margin: 0 auto;
    }
    .container1,
    .containerDos {
      display: flex;
      align-items: center;
    }
    .containerDos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 15%;
      .text{
        width:50%;
        margin-right:5%;
      }
      p{
        width:100%;
      }
    }
    .title {
      width: 48%;
    }
    .information {
      position: relative;
      margin: 0;
      z-index: 1;
      width: 44%;
      margin: 0 auto;
      div {
        width: 34%;
      }
    }
    .infomationStye {
      display: flex;
      align-items: center;
      p {
        margin-left: 5%;
      }
    }
    .info {
      margin-left: 10%;
    }
    .containerDos {
      justify-content: space-between;
    }
    .textInfo2 {
      width: 45%;
      padding-bottom: 0;
    }
    .imgBranding {
      width: 50%;
      padding-bottom: 0;
    }
    .imgBranding1,
    .imgBranding7,
    .imgBranding2,
    .imgBranding6,
    .imgBranding3,
    .imgBranding4,
    .imgBranding5 {
      max-height: 250px;
    }

    .container3 {
      padding-bottom: 10%;
    }
    .textInfo3{
      padding-right:8%;
    }
    .containerTres {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .textInfo4 {
      width: 35%;
      padding-top:10%;
      padding-bottom: 0;
    }
    .screen {
      width: 60%;
    }
    .ipad {
      width: 57%;
    }
    .imgWeb1 {
      padding-bottom: 0;
    }

    .container4 {
      padding-bottom: 15%;
    }
    .webs {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .textInfo5 {
      padding-bottom: 5%;
    }
    .imgWeb2,
    .imgWeb3 {
      width: 48%;
      position: relative;
      margin-left: 0;
      -webkit-animation-fill-mode: forwards;
    }
    .gif {
      padding-top: 0;
      padding-bottom: 15%;
      img {
        width: 20vh;
      }
      p{
        width: 80%;
        padding-top:0;
        padding-bottom:15%;
      }
    }
    .mockupScreen {
      padding-top: 0;
    }

    .ipad {
      width: 100%;
    }
    .fixed {
      position: fixed;
      bottom: 0;
      width: 42% !important;
    }

    .fixed2 {
      position: absolute;
      top: none;
      bottom: 0;
      top: 75%;
      width: 100% !important;
    }
    .textInfo4{
      padding-top:0;
      width:80%;
    }
    .video {
      padding-top:15%;
      padding-bottom: 15%;
      height: 900px;
    }
    .mockup{
      width:100%;
    }
  }
  @media only screen and (max-height: 768px) and (max-width: 1024px) and (orientation:landscape){
    .imgHome {
      height: 90vh;
    }
    .img1 {
      width: 20%;
      top: 15%;
      left: 42%;
    }
    .img2 {
      width: 30%;
      left: 30%;
      top: 68%;
    }
    .img3 {
      width: 21%;
      top: 55%;
    }
    .img4 {
      width: 26%;
      left: 78%;
      top: 20%;
    }
    .img5 {
      width: 19%;
      top: 60%;
      left: 70%;
    }
    .logo {
      width: 15%;
      top: 19%;
    }
    .video {
      padding-top:15%;
      padding-bottom: 15%;
      height: 900px;
    }
    .mockup{
      width:100%;
    }

  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .gif {
      width: 100vw;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      padding-top: 15%;
      padding-bottom: 15%;
      
      img {
        padding-bottom: 5%;
        width: 20vw;
      }
    }
    .imgHome {
      position: relative;
      height: 70vh;
      margin-bottom: 8%;
    }
    .img1 {
      max-height: auto;
      width: 16%;
      top: 10%;
      left: 35%;
    }
    .img2 {
      max-height: auto;
      width: 23%;
      left: 25%;
      top: 78%;
    }
    .img3 {
      max-height: auto;
      width: 20%;
      top: 50%;
      left: 0.3%;
    }
    .img4 {
      max-height: auto;
      display: block;
      position: absolute;
      width: 20%;
      left: 82%;
      top: 20%;
    }
    .img5 {
      max-height: auto;
      width: 17%;
      top: 29%;
      left: 58%;
    }
    .logo {
      width: 8%;
      position: absolute;
      top: 24%;
      left: 18%;
    }

    .textInfo1,
    .textInfo2,
    .textInfo3,
    .textInfo4,
    .textInfo5 {
      width: 75%;
      margin: 0 auto;
    }

    .container1 {
      width: 80vw;
    }
    .container1,
    .containerDos {
      display: flex;
      align-items: center;
    }

    .title {
      width: 50%;
      padding-right: 5%;
    }
    .information {
      position: relative;
      margin: 0;
      z-index: 1;
      width: 50%;
      margin: 0 auto;
      div {
        width: 34%;
      }
    }
    .infomationStye {
      display: flex;
      align-items: center;
      p {
        margin-left: 5%;
      }
    }
    .info {
      margin-left: 10%;
    }
    .containerDos {
      padding-bottom: 10%;
      justify-content: space-between;
      p{
        width:100%;
        margin-bottom:10%;
      }
      .text{
        width:50%;
        margin-right:5%;
      }
    }
    .textInfo2 {
      width: 45%;
      padding-bottom: 0;
    }
    .textInfo3{
      padding-top: 5%;
    }
    .imgBranding {
      width: 50%;
      padding-bottom: 0;
    }

    .container2,
    .container3,
    .container4 {
      width: 80vw;
    }
    .container3 {
      padding-bottom: 0;
    }
    .containerTres {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        padding-right: 8%;

      }
    }
    .textInfo4 {
      width: 35%;
      padding-bottom: 0;
    }
    .screen {
      width: 60%;
      height: 190vh;
    }
    .ipad {
      z-index: 1;
      top:10%;
      margin-left: -3%;
      width: 110%;
    }
    .imgWeb1 {
      position: absolute;
      padding-bottom: 0;
      width: 100%;
      left: 0;
    }

    .container4 {
      padding-top:20%;
      padding-bottom: 10%;
      p{
        padding-top:0;
        width:80%;
      }
    }
    .webs {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .textInfo5 {
      padding-bottom: 5%;
    }
    .imgWeb2,
    .imgWeb3 {
      width: 48%;
      position: relative;
      margin-left: 0;
      -webkit-animation-fill-mode: forwards;
    }
    .imgBranding1,
    .imgBranding7,
    .imgBranding2,
    .imgBranding6,
    .imgBranding3,
    .imgBranding4,
    .imgBranding5 {
      height:210px;
    }
    .mockupScreen {
      padding-top: 0;
    }


    .fixed {
      position: fixed;
      top: 3%;
      bottom: 0;
      left: 57%;
      width: 38% !important;
    }

    .fixed2 {
      position: absolute;
      top: none;
      bottom: 0;
      top: 72%;
      left:1%;
      width: 109% !important;
    }
    .video {
      padding-top:15%;
      padding-bottom: 15%;
      height: 900px;
    }
    .mockup{
      width:100%;
    }
  }
  @media only screen and (min-width: 1441px) {
    .gif {
      width: 100vh;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      padding-top: 0%;
      padding-bottom: 10%;
      img {
        padding-bottom: 0;
        width: 10vw;
      }
      .textInfo3{
        width: 90%;
      }
    }
    .imgHome {
      position: relative;
      height: 70vh;
      margin-bottom: 8%;
    }
    .img1 {
      max-height: auto;
      width: 16%;
      top: 10%;
      left: 35%;
    }
    .img2 {
      max-height: auto;
      width: 23%;
      left: 25%;
      top: 78%;
    }
    .img3 {
      max-height: auto;
      width: 20%;
      top: 50%;
      left: 0.3%;
    }
    .img4 {
      max-height: auto;
      display: block;
      position: absolute;
      width: 20%;
      left: 82%;
      top: 20%;
    }
    .img5 {
      max-height: 200px;
      width: 17%;
      top: 29%;
      left: 58%;
    }
    .logo {
      width: 8%;
      position: absolute;
      top: 24%;
      left: 18%;
    }

    .textInfo1,
    .textInfo2,
    .textInfo3,
    .textInfo4,
    .textInfo5 {
      width: 70%;
      margin: 0 auto;
    }

    .container1 {
      width: 80vw;
    }
    .container1,
    .containerDos {
      display: flex;
      align-items: center;
    }

    .title {
      width: 50%;
      padding-right: 5%;
    }
    .information {
      position: relative;
      margin: 0;
      z-index: 1;
      width: 50%;
      margin: 0 auto;
      div {
        width: 34%;
      }
    }
    .infomationStye {
      display: flex;
      align-items: center;
      p {
        margin-left: 5%;
      }
    }
    .info {
      margin-left: 10%;
    }
    .containerDos {
      padding-bottom: 10%;
      justify-content: space-between;
      p{
        width:100%;
        margin-bottom:10%;
      }
      .text{
        width:50%;
        margin-right:5%;
      }
    }
    .textInfo2 {
      width: 45%;
      padding-bottom: 0;
    }
    .textInfo3{
      padding-top: 5%;
    }
    .imgBranding {
      width: 50%;
      padding-bottom: 0;
    }

    .container2,
    .container3,
    .container4 {
      width: 80vw;
    }
    .container3 {
      padding-bottom: 0;
    }
    .containerTres {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        padding-right: 8%;

      }
    }
    .textInfo4 {
      width: 35%;
      padding-bottom: 0;
    }
    .screen {
      width: 60%;
      height: 190vh;
    }
    .ipad {
      z-index: 1;
      top:-1%;
      margin-left: -3%;
      width: 110%;

    }
    .imgWeb1 {
      position: absolute;
      padding-bottom: 15%;
      width: 100%;
      left: 0;
    }

    .container4 {
      padding-top: 5%;
      padding-bottom: 10%;
      p{
        padding-top:0;
        width:60%;
      }
    }
    .webs {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .textInfo5 {
      padding-bottom: 5%;
    }
    .imgWeb2,
    .imgWeb3 {
      width: 48%;
      position: relative;
      margin-left: 0;
      -webkit-animation-fill-mode: forwards;
    }
    .imgBranding1,
    .imgBranding7,
    .imgBranding2,
    .imgBranding6,
    .imgBranding3,
    .imgBranding4,
    .imgBranding5 {
      height:210px;
    }
    .mockupScreen {
      padding-top: 0;
    }
    .fixed {
      position: fixed;
      top: -2%;
      bottom: 0;
      left: 56%;
      width: 39% !important;
    }

    .fixed2 {
      position: absolute;
      top: 67%;
      bottom: 0;

      left:1%;
      width: 109% !important;
    }
    .video {
      padding-top:10%;
      padding-bottom: 10%;
      height: 800px;
    }
    .mockup{
      width:100%;
    }
  }
`;

export { ProjectAmapedStyle };
