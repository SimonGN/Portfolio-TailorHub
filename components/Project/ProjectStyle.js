import styled from 'styled-components';

const ProjectStyle = styled.div`
padding-bottom:35%;
  Link{
    cursor:pointer;
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

  .ourProject {
    width:93vw;
    height: auto;
    margin: 0 auto;
    padding-top: 25%;
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
  }
  .title{
    margin-bottom:8%;
  }
  .contentProject {
    display: flex !important;
    justify-content: center;
    align-items: center;
    outline: none;
  }
  .contentLogo {
    position: absolute;
    z-index: 2;
  }
  .contentImg {
    position: relative;
    text-align: center;
  }
  .imgMove {
    height: 50vh;
    object-fit: cover;
  }
  .logoVasalto{
    width:40vw;
  }
  .logoMove{
    width: 25vw;
  }
  .logoNunc{
    width: 33vw;
  }
  .viewMore {
    position: absolute;
    z-index: 2;
    align-self: flex-end;
    bottom: 4%;
  }

  .viewMore > a  {
    font-family: Grabenbach-regular;
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    color: white;
  }

  @media only screen and (min-width:415px) and (max-width:768px){
    .title{
        margin-bottom:6%;
      }
      .logoVasalto{
        width:25vw;
      }
      .logoNunc{
        width: 23vw;
      }
      .logoMove{
        width: 15vw;
      }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
      padding-bottom:20%;
      display: flex;
      align-items: center;

      .global{
        position:relative;
        width:95vw;
        margin: 0 auto;
      }
      .title{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        margin-bottom:0%;
        position:absolute;
        top: 26%;
        right: 44.5%;
      }

      .imgMove {
        width:33vw;
        height: auto;
      }
      .logoMove{
        width: 11vw;
      }
      .logoVasalto{
        width:18vw;
      }
      .logoNunc{
        width: 13vw;
      }

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
      display: flex;
      align-items: center;
      padding-bottom:20%;

      .global{
        position:relative;
        width:90vw;
        margin: 0 auto;
      }
      .title{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        margin-bottom:0%;
        position:absolute;
        top: 35%;
        right: 47%;
      }
      .imgMove {
        height: 65vh;
        width: 35vw;
      }
      .logoMove{
        width: 10vw;
      }
      .logoVasalto{
        width:18vw;
      }
      .logoNunc{
        width: 13vw;
      }
      .ourProject{
        padding-top: 20%;
      }

    }
    @media only screen and (min-width:1441px){
      padding-bottom:20%;
      display: flex;
      align-items: center;
      .title{
        margin-right:3%;
      }
      .global{
        position:relative;
        width:80vw;
        margin: 0 auto;
      }
      .title{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        margin-bottom:0%;
        position:absolute;
        top: 35%;
        right: 45.5%;
      }
      .imgMove {
        height: 65vh;
        width: 25vw;
      }
      .logoMove{
        width: 8vw;
      }
      .logoNunc{
        width: 12vw;
      }
      .logoVasalto{
        width: 13vw;
      }
      .ourProject{
        padding-top: 20%;
      }
    }

`;

export { ProjectStyle };
