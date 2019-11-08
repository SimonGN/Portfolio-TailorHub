import styled from 'styled-components';

const NavWrapperStyle = styled.div`
    width:100%;
    position:fixed;
    z-index:30;
    height: ${props => (props.position ? '0' : 'auto')};
    background-color: ${props => (props.position ? 'transparent' : 'white')};
    .menuIcon{
      width:94%;
      padding-top:2%;
      margin:0 auto;
      display:flex;
      justify-content:flex-end;
      align-items: center;
    }

    .navLogo{
      width:40%;
    }
    .menu1{
      display:none;
    }
    .hamburger{
      -moz-appearance:inherit; 
      -o-appearance:inherit;
      -ms-appearance:inherit;
      appearance:inherit;
      -webkit-appearance:inherit;
      outline:none;
    }
    .menu{
      background-color:white;
      height: 98vh;
      z-index:1;

    }
     .menu2, .menu3{
      width: 94%;
      margin: 0 auto;
    }
     .menu2{
      display:flex;
      height: 60%;
      flex-flow:column-reverse;
      justify-content: flex-end;
      width: 94%;
      margin: 0 auto;
      padding-top:25%;

      a{
        color: #0F1C51;
        margin-bottom:12%;
      }

    }
      
    @media only screen and (min-width:415px) and (max-width:768px){
      height: 0;

      .hamburger, .hamburger--spin{
        display:none;
      }
      .menuIcon{
        justify-content: space-between;
        & > a {
          width:20%;
        }
      }
      .navLogo{
      width:100%;
    }
      .menu1{
        width:40%;
        display:flex;
        justify-content: space-between;

        }
    }
    
    @media only screen and (min-width:769px) and (max-width:1024px){
      height: 0;

      .menu, .menu2, .menu3, .hamburger, .hamburger--spin{
        display:none;
      }
      .menuIcon{
        justify-content: space-between;
        & > a {
          width:20%;
        }
      }
      .navLogo{
      width:70%;
    }
      .menu1{
        width:30%;
        display:flex;
        justify-content: space-between;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
      .menu, .menu2, .menu3, .hamburger, .hamburger--spin{
        display:none;
      }
      height: 0;

      .hamburger, .hamburger--spin{
        display:none;
      }

      .menuIcon{
        justify-content: space-between;
        padding-top:1%;
        & > a {
          width:11%;
        }
      }
      .navLogo{
      width:100%;
    }
      .menu1{
        width:22%;
        display:flex;
        justify-content: space-between;
        }
        .menu{
          height: 0;
        }
    }
    @media only screen and (min-width:1441px){
      .menu2, .menu3, .hamburger, .hamburger--spin{
        display:none;
      }
      height: 0;

      .hamburger, .hamburger--spin{
        display:none;
      }
      .menuIcon{
        justify-content: space-between;
        padding-top:1%;
        & > a {
          width:10%;
        }
      }
      .navLogo{
      width:100%;
    }
      .menu1{
        width:23%;
        display:flex;
        justify-content: space-between;
        }
        .menu{
          height: 0;
        }
    } 
    
 
`;

export { NavWrapperStyle };
