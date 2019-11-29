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
  .infomationStye{
    width:30vw;
    position:absolute;
    display:flex;
    flex-direction:row;
    align-items: center;
    z-index: 1;
  }
  .title{
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  .ourProject {
    width:100vw;
    height: auto;
    margin: 0 auto;
    padding-top: 25%;
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
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
    height: 50vh;
    object-fit: cover;
  }
  .viewMore {
    z-index: 2;
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
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
      padding-bottom:20%;
      display: flex;
      align-items: center;
      .imgProject {
        height: 90vh;
        width: 100vw;
      }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
      display: flex;
      align-items: center;
      padding-bottom:20%;

      .imgProject {
        height: 90vh;
        width: 100vw;
      }
      .ourProject{
        padding-top: 20%;
      }
    }
    @media only screen and (min-width:1441px){
      padding-bottom:20%;
      display: flex;
      align-items: center;
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
