import styled from 'styled-components';

const ProjectMoveStyle = styled.div`
width:93vw;
margin: 0 auto;

.car{
  width:90%;
  margin:0 auto;
  padding-top: 15%;
}
.container1, .information, .textInfo1, .imgs, .textInfo2{
  margin-top:20%;
  margin-bottom: 20%;
}
.textInfo2{
  margin-top:5%;
}


.imgCar{
  position:relative;
  width:100%;
  z-index:3;
  margin-top:20%;
}
.box{
  width:90%;
  margin:0 auto;
}
.imgBox1, .imgBox2{
  width:90%;
  margin: 0 auto;
  margin-top: -80%;

}
.imgBox2{
  z-index:2;
  margin-left: 10%;

}
.imgBox1{
  z-index:1;
  margin-left: 10%;

}

.logo{
  display:none;
}
.title{
  margin-top:10%;
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

  .imgs{
    width:100vw;
    display:flex;
  }
  .img1, .img2, .img3, .img4{
    width:75%;
  }
  .parallax-outer{
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .container3{
    display:flex;
    flex-flow: column;
  }
  .imgIpad1, .imgIpad2, .imgIpad3{
    width:100vw;
    mix-blend-mode: multiply;
    margin-left: -8%;
  }
  .container4{
      width: 93%;
      margin: 0 auto;
      padding-top: 10%;
      padding-bottom: 10%;
    }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
   .car{
     width:85%;
   }
   .textInfo2 {
    margin-top: 0;
   }
   .container1{
    margin-bottom:10%;
   }
   .information{
     margin:0;
   }

  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
     .information, .textInfo1, .imgs{
      margin-top:15%;
      margin-bottom:15%;
    }
    .imgs{
      margin-top:25%;
    }
    .intro{
      width:100vw;
      display:flex;
      flex-flow: row-reverse;
      align-items: center;
      margin-bottom: 10%;
    }

    .car{
      width:90%;
    }
    .logo{
      display: block;
      width:30%;
    }
    .container1{
      width:60%;
      margin-top:25%;;
      margin-bottom:0;
      .title{
        width:80%;
        margin-top:5%;
      }
    }
    .information {
      width: 80vw;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 20%;
        text-align: left;
      }
      p{
        margin-left:5%;
      }
      .infomationStye{
        display: flex;
        justify-items: center;
        align-items: center;
      }
    }
    .text{
      width: 80vw;
      margin: 0 auto;
    }
    .container3{
      display: flex;
      flex-flow: row;
      align-items: center;
      width:100vw;
      margin-bottom: 10%;
    }
    .textInfo1{
      width: 80%;
    margin: 0 auto;
    padding-top: 15%;
    }
    .textInfo2{
      width:45%;
      margin-top:0;
      margin-bottom:0;
    }
    .imgIpad1{
      width:70%;
      margin-top: 10%;
      margin-left:-25%;
    }
    .ipads{
      display:flex;
      width:90%;
      margin: 0 auto;
    }
    .imgIpad2, .imgIpad3{
      width:50%;
      margin:0 auto;
      margin-left: 0;
    }
    .imgIpad2{
      margin-left: -4%;
      max-height:600px;
    }
    .imgCar{
      margin-top:5%;
      max-height:600px;
    }
    .container4{
      width: 80%;
      margin: 0 auto;
      padding-top: 10%;
      padding-bottom: 10%;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .information, .textInfo1, .imgs{
      margin-top:15%;
      margin-bottom:15%;
    }
    .imgs{
      margin-top:25%;
    }
    .intro{
      width:80vw;
      margin: 0 auto;
      display:flex;
      flex-flow: row-reverse;
      align-items: center;
      margin-bottom: 10%;
    }
    .textInfo1{
      padding-top:15%;
      width:80%;
      margin: 0 auto;
    }
    .car{
      width:90%;
      margin-top: 5%;
    }
    .logo{
      display: block;
      width:25%;
    }
    .container1{
      width:60%;
      margin-top:25%;;
      margin-bottom:0;
      .title{
        width:80%;
        margin-top:5%;
      }
    }
    .information {
      width: 80vw;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 20%;
        text-align: left;
      }
      p{
        margin-left:5%;
      }
      .infomationStye{
        display: flex;
        justify-items: center;
        align-items: center;
      }
    }
    .container3{
      display: flex;
      flex-flow: row;
      align-items: center;
      width:100vw;
      margin-bottom: 10%;
    }
    .textInfo2{
      width:45%;
      margin-top:0;
      margin-bottom:0;
    }
    .imgIpad1{
      width:70%;
      margin-top: 10%;
      margin-left:-25%;
    }
    .ipads{
      display:flex;
      width:90%;
      margin: 0 auto;
    }
    .imgIpad2, .imgIpad3{
      width:50%;
      margin:0 auto;
      margin-left: 0;
    }
    .imgIpad2{
      margin-left: -4%;
    }
    .imgCar{
      margin-top:5%;
    }
    .container4{
      width: 80%;
      margin: 0 auto;
      padding-top: 10%;
      padding-bottom: 10%;
    }
  }
  @media only screen and (min-width: 1441px) {
    .information, .textInfo1, .imgs{
      margin-top:15%;
      margin-bottom:15%;
    }
    .imgs{
      margin-top:25%;
    }
    .intro{
      width:80vw;
      margin: auto;
      display:flex;
      flex-flow: row-reverse;
      align-items: center;
      margin-bottom: 5%;
    }
    .textInfo1{
      padding-top:15%;
      width:60%;
      margin: 0 auto;
    }
    .car{
      width:60%;
      margin-top: 3%;
      margin-right:5%;
    }
    .logo{
      display: block;
      width:15%;
    }
    .container1{
      width:60%;
      margin-top:10%;;
      margin-bottom:0;
      .title{
        width:50%;
        margin-top:5%;
      }
    }
    .information {
      width: 65vw;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 20%;
        text-align: left;
      }
      p{
        margin-left:5%;
      }
      .infomationStye{
        display: flex;
        justify-items: center;
        align-items: center;
      }
    }
    .container3{
      display: flex;
      flex-flow: row;
      align-items: center;
      width:100vw;
      margin-bottom: 10%;
    }
    .textInfo2{
      width:45%;
      margin-top:0;
      margin-bottom:0;
    }
    .imgIpad1{
      width:70%;
      margin-top: 10%;
      margin-left:-25%;
    }
    .ipads{
      display:flex;
      width:90%;
      margin: 0 auto;
    }
    .imgIpad2, .imgIpad3{
      width:50%;
      margin:0 auto;
      margin-left: 0;
    }
    .imgIpad2{
      margin-left: -4%;
    }
    .imgCar{
      margin-top:5%;
    }
    .container4{
      width: 70%;
      margin: 0 auto;
      padding-top: 10%;
      padding-bottom: 10%;
    }
  }
`;

export { ProjectMoveStyle };
