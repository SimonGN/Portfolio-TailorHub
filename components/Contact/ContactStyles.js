import styled from 'styled-components';


const ContactStyle = styled.div`

    width: 100vw;
    img{
        width:100%;
    }
    .global{
        width:94%;
        margin: 0 auto;
        padding-top:20%;
        padding-bottom: 20%;
    }
    a{
        text-decoration:none; 
    }
    .title{
        margin-bottom:5%;
    }
    .container1, .container2{
        margin-bottom:25%;
    }
    .intro{
        margin-bottom:10%;
    }
    .info{
        display:flex;
        flex-flow: column;
    }

    
    @media only screen and (min-width:415px) and (max-width:768px){
        min-height: 100vh;
        .global{
            padding-top: 10%;
        }
        .container1, .container2{
            margin-bottom:20%;
        }
        .intro{
        margin-bottom:5%;
    }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display: flex;
        .imgage{
            width:50%;
            height: 100vh;
            object-fit:cover;
        }
        img{
            width:100%;
            height: 100%;
            object-fit:cover;

        }
        .global{
            width:45%;
            height: 100vh;
            margin: 0 auto;
            padding-top: 0;
            padding-bottom: 0;
            display:flex;
            flex-flow: column;
            justify-content:center;
            .container3{
                order: 0;
            }
            .container2{
                order: 1;
            }
        }
        .info, .direction{
            width: 80%;
            margin-left: 2%;
        }
        .title{
            margin-bottom: 16%;
        }
        
        .container1, .container2, .container3{
            width:100%;
            display: flex;
        }

        .container1, .container3{
            margin-bottom:10%;
        }
        .container2{
            margin:0; 
        }
        .container3{
            .title{
                margin-bottom:0;
            }
            .direction, a{
                width: 25vw;
                display: flex;
                align-items: center;
            }
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        display: flex;
        .imgage{
            width:50%;
            height: 100vh;
            object-fit:cover;
        }
        img{
            width:100%;
            height: 100%;
            object-fit:cover;

        }
        .global{
            width:45%;
            height: 100vh;
            margin: 0 auto;
            padding-top: 0;
            padding-bottom: 0;
            display:flex;
            flex-flow: column;
            justify-content:center;
            .container3{
                order: 0;
            }
            .container2{
                order: 1;
            }
        }
        .info, .direction{
            width: 80%;
            margin-left: 2%;
        }
        .title{
            margin-bottom: 0;
            text-align: center;
        }
        
        .container1, .container2, .container3{
            width:100%;
            display: flex;
        }

        .container1, .container3{
            margin-bottom:10%;
        }
        .container2{
            margin:0; 
        }
        .container3{
            .title{
                margin-bottom:0;
            }
            .direction, a{
                width: 25vw;
                display: flex;
                align-items: center;
            }
        }
    }
    @media only screen and (min-width:1441px){
        display: flex;
        .imgage{
            width:50%;
            height: 100vh;
            object-fit:cover;
        }
        img{
            width:100%;
            height: 100%;
            object-fit:cover;

        }
        .global{
            width:45%;
            height: 100vh;
            margin: 0 auto;
            padding-top: 0;
            padding-bottom: 0;
            display:flex;
            flex-flow: column;
            justify-content:center;
            .container3{
                order: 0;
            }
            .container2{
                order: 1;
            }
        }
        .info, .direction{
            width: 80%;
            margin-left: 2%;
        }
        .title{
            margin-bottom: 0;
            text-align: center;
        }
        
        .container1, .container2, .container3{
            width:100%;
            display: flex;
        }

        .container1, .container3{
            margin-bottom:10%;
        }
        .container2{
            margin:0; 
        }
        .container3{
            .title{
                margin-bottom:0;
            }
            .direction, a{
                width: 25vw;
                display: flex;
                align-items: center;
            }
        }
    }
`;

export { ContactStyle };
