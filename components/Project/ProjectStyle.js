import styled from 'styled-components';

const ProjectStyle = styled.div`
  padding-bottom: 150px;
  Link{
    cursor:pointer;
  }
  p{
    margin-bottom: 15px;
    color: #0F1C51;
  }
  .slick-slider , .slick-track, .slick-active, .slick-current, .slick-initialized, .slick-list{
    outline: none !important;
  }
  .client {
     outline: none;
  }
  &:active{
    outline: none !important;
  }
  .slick-list{
    padding-top: 3%;
  }
  .imgProject{
    width: 100vw;
    height: 80vh;
    object-fit: cover;
    margin-bottom:30px;
  }
  .infomationStye{
    width:94%;
    margin: 0 auto;
  }
  .viewMore >a{
    margin-right:4%;
  }
 

  @media only screen and (min-width:415px) and (max-width:768px){
    
  }
  @media only screen and (min-width:769px) and (max-width:1024px){
    .imgProject{
      margin-bottom: 35px;
      height: 50vh;
    }
    .infomationStye{
      width: 85vw;
      display: flex;
      align-items: center;
    }
    .title{
      width:auto;
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      p{
        margin-bottom: 0;
      }
    }
  }
  @media only screen and (min-width:1025px) and (max-width:1440px){
    .imgProject{
      margin-bottom: 35px
    }
    .infomationStye{
      width: 85vw;
      display: flex;
    align-items: center;
    }
    .title{
      width:auto;
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      p{
        margin-bottom: 0;
      }
    }
  }
  @media only screen and (min-width:1441px){
    .imgProject{
      margin-bottom: 35px
    }
    .infomationStye{
      width: 85vw;
      display: flex;
    align-items: center;
    }
    .title{
      width:auto;
      white-space: nowrap;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      p{
        margin-bottom: 0;
      }
    }
  }

`;

export { ProjectStyle };
