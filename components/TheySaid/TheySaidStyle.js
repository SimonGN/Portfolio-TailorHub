import styled from 'styled-components';


const TheySaidStyle = styled.div`
    background-color: #0F1C51;
    height:auto;
    outline: none !important;
    .slick-slider , .slick-track, .slick-active, .slick-current, .slick-initialized, .slick-list{
    outline: none !important;

    .client {
        outline: none;
    }
    
    &:active{
        outline: none !important;
    }
    }    
    .global{
        width:90%;
        margin: 0 auto;
        padding-top:30%;
        padding-bottom:25%;
    }
    .title, .subTitle, .infoClient{
        margin:auto;
    }
    .title{
        padding-bottom:25%;
    }
    .subTitle{
        margin-bottom: 10%;
    }
    .embed-container { 
        position: relative; 
        margin:0 auto;
        padding-bottom: 56.25%; 
        overflow: hidden; 
        max-width: 90%; 
        height: auto; 
        }
    .embed-container iframe, .embed-container object, .embed-container embed { 
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%;
    }
    .nameText{
        margin-top:4%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .title{
            width:70vw;
            margin:0 auto;
            text-align: left;
        }
        .global{
            width: 94vw;
        }
        .subTitle{
            margin-bottom: 5%;
        }
        .galery{
            margin: 0 auto;
        }
       
        .videoText{
            margin-top:5%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .global{
            width:90vw;
            margin: 0 auto;
            position: relative;
            padding-top: 5%;
            padding-bottom:7%;
        }
        .title{
            width:60vw;
            margin:0;
        }
        .subTitle{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:0%;
            position:absolute;
            left: 45.6%;
            top: 24%;
        }
        .client{
            display:flex !important;
            align-items:center;
            width:100%;
            padding-top: 5%;
        }
        
        .videoText{
            width:44%;
            margin-top: -10%;
        }

        .embed-container { 
            position: relative; 
            margin-left:0;
            padding-bottom: 56.25%; 
            overflow: hidden; 
            max-width: 90%; 
            height: auto; 
            width: 45%;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .global{
            width:80vw;
            margin: 0 auto;
            position: relative;
            padding-top: 7%;
            padding-bottom:7%;
        }
        .title{
            width:50vw;
            margin:0;
            padding-bottom:25%;
        }
        .subTitle{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:0%;
            position:absolute;
            left: 47%;
            top: 32%;
        }
        .client{
            display:flex !important;
            align-items:center;
            width:100%;
        }
        .video{
            width:40%;
            height: 40vh;
            margin: 0 auto;
            margin-right:10%;
        }
        .videoText{
            width:44%;
        }
        .embed-container { 
            position: relative; 
            margin-left:0;
            padding-bottom: 56.25%; 
            overflow: hidden; 
            max-width: 90%; 
            height: auto; 
            width: 45%;
        }

    }
    @media only screen and (min-width:1441px){
        .global{
            width:65vw;
            margin: 0 auto;
            position: relative;
            padding-top:7%;
            padding-bottom: 7%;
        }
        .title{
            width:50vw;
            margin:0;
            padding-bottom:20%;
        }
        .subTitle{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:0%;
            position:absolute;
            left: 46.5%;
            top: 35%;
        }
        .client{
            display:flex !important;
            align-items:center;
        }
        .video{
            width:45%;
            margin: 0 auto;
            margin-right:10%;
        }
        .videoText{
            width:44%;
        }

        .embed-container { 
            position: relative; 
            margin-left:0;
            padding-bottom: 56.25%; 
            overflow: hidden; 
            max-width: 90%; 
            height: auto; 
            width: 45%;
        }
    }


`;

export { TheySaidStyle };
