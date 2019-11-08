import styled from 'styled-components';


const FooterStyle = styled.div`
    .animate{
        cursor: pointer;
    }
    a{
        text-decoration:none; 
    }
    background-color: ${props => (props.backgroundColor === 'black' ? 'black' : '#0F1C51')};
    border-top: 1px solid white; 
    .footer1, .footer2, .footer3, .footer4, .footer5{
        width:90%;
        margin:auto;
        margin-bottom:10%;
    }
    aside{
        display: block;
         position: relative;
        margin: 40px 0;
    }
    .footer1{
        margin-top:25%;
    }
    .logo{
        width:55vw;
        margin-bottom:5%;
    }
    .direction{
        width:100%;
    }
    h3{
        font-family: "Grabenbach-regular";
        color: white;
        line-height: 1rem;
        font-size: 0.6rem;
        letter-spacing: 0.07rem;
        padding-bottom:5%;
        width:90%;
        margin:auto;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .footer1{
            margin-top:10%;
        } 
        .footer2, .footer3, .footer4, .footer5{
            display: flex;
            align-items: center;

            p{
                margin: 0;
                padding: 0;
                margin-right: 0.5%;
                white-space: pre;
            } 
        }
        .logo{
            width:40vw;
            margin-bottom:3%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .footer1, .footer2, .footer3, .footer4, .footer5{
            margin:auto;
            margin-bottom:5%;
            width:50%;
        }
        .footer2, .footer3, .footer4, .footer5{
            display: flex;
            align-items: center;

            p{
                margin: 0;
                padding: 0;
                margin-right: 0.5%;
                white-space: pre;
            } 
        }
        .footer4{
            width:23vw;
        }
        .footer1{
            margin-top:8%;
        } 
        .logo{
            width:20vw;
            margin-bottom:3%;
        }
        .column{
            width:90%;
            margin:auto;
            display:flex;
        }
        h3{
            width:90%;
            margin:auto;
            padding-bottom: 1%;
        }
        .logo{
            width:15vw;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .footer1, .footer2, .footer3, .footer4, .footer5{
            
            margin:auto;
            margin-bottom:5%;
        }
        .footer2, .footer3, .footer4, .footer5{
            display: flex;
            align-items: center;

            p{

                margin-right: 0.5%;
                white-space: pre;
            } 
        }
        .footer4{
            width:23vw;
        }
        .footer1{
            margin-top:8%;
        } 
        .logo{
            width:10vw;
            margin-bottom:3%;
        }
        .column{
            width:78%;
            margin:auto;
            display:flex;
        }
        h3{
            width:78%;
            margin:auto;
            padding-bottom: 1%;
        }
    }
    @media only screen and (min-width:1441px){
        .footer1, .footer2, .footer3, .footer4, .footer5{
            
            margin:auto;
            margin-bottom:5%;
        }
        .footer2, .footer3, .footer4, .footer5{
            display: flex;
            align-items: center;

            p{
                margin-right: 0.5%;
                white-space: pre;
            } 
        }
        .footer4{
            width:23vw;
        }
        .footer1{
            margin-top:8%;
        } 
        .logo{
            width:10vw;
            margin-bottom:3%;
        }
        .column{
            width:78%;
            margin:auto;
            display:flex;
        }
        h3{
            width:78%;
            margin:auto;
            padding-bottom: 1%;
        }
    }
`;

export { FooterStyle };
