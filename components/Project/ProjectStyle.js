import styled from 'styled-components';

const ProjectStyle = styled.div`
padding-bottom:100px;
  Link{
    cursor:pointer;
  }
  p{
    margin-bottom: 10px;
  }
  .slick-slider , .slick-track, .slick-active, .slick-current, .slick-initialized, .slick-list{
    outline: none !important;

    .client {
        outline: none;
    }
    &:active{
        outline: none !important;
    }
    }    
    .slick-list{
      padding-top: 3%;
    }
  .infomationStye{
    width:94vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    position: unset;
    z-index: 1;
    margin:0 auto;
    margin-top: 30px;
    p{
      color: #0F1C51;
    }
  }
  .ourProject {
    width:100vw;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
    flex-direction: column-reverse;
  }

  .contentProject {
    display: flex !important;
    justify-content: center;
    align-items: center;
    outline: none;
  }
  .contentImg {
    position: relative;
    text-align: center;
  }
  .imgProject {
    height: 70vh;
    object-fit: cover;
  }
  .viewMore{
    a{
        margin-right: 10%;
      }
  }

  @media only screen and (min-width:415px) and (max-width:768px){
    
  }
  @media only screen and (min-width:769px) and (max-width:1024px){
    display: flex;
    align-items: center;
    flex-direction:column;
    padding-bottom:20%;
    .ourProject{
      justify-content: flex-end;
      align-items: baseline;
    }
    .infomationStye{
      margin-left:1%;
      padding-bottom: 5%;
      position:absolute;
    }
    .title{
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin-right:5%;
      margin-right: 0;
      margin-left: 0;
    }
    .info2{
      margin-top:5%;
    }
    .viewMore{
      margin-top: 5%;
      a{
        margin-right: 10%;
      }
    }
    .imgProject {
      height: 90vh;
      width: 100vw;
    }
    .ourProject{
      padding-top: 20%;
    }
  }
  @media only screen and (min-width:1025px) and (max-width:1440px){
    display: flex;
    align-items: center;
    flex-direction:column;
    padding-bottom:20%;
    .ourProject{
      justify-content: flex-end;
      align-items: baseline;
    }
    .infomationStye{
      margin-left:1%;
      padding-bottom: 5%;
      position:absolute;
    }
    .title{
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin-right:5%;
      margin-right: 0;
      margin-left: 0;
    }
    .info2{
      margin-top:5%;
    }
    .viewMore{
      margin-top: 5%;
      a{
        margin-right: 10%;
      }
    }
    .imgProject {
      height: 90vh;
      width: 100vw;
    }
    .ourProject{
      padding-top: 20%;
    }
  }
  @media only screen and (min-width:1441px){
    display: flex;
    align-items: center;
    flex-direction:column;
    padding-bottom:20%;
    .ourProject{
      justify-content: flex-end;
      align-items: baseline;
    }
    .infomationStye{
      margin-left:1%;
      padding-bottom: 5%;
      position:absolute;
    }
    .title{
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      margin-right:5%;
      margin-right: 0;
      margin-left: 0;
    }
    .info2{
      margin-top:5%;
    }
    .viewMore{
      margin-top: 5%;
      a{
        margin-right: 10%;
      }
    }
    .imgProject {
      height: 90vh;
      width: 100vw;
    }
    .ourProject{
      padding-top: 20%;
    }
  }

`;

export { ProjectStyle };
