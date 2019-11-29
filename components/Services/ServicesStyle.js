import styled from 'styled-components';

const ServicesStyle = styled.div`
    display: flex;
    align-items: center;
    padding-bottom:100px;
    @-webkit-keyframes drift{
    0% {
        -webkit-transform:translateX(0);
        transform:translateX(0);
    }
    to{
        -webkit-transform:translateX(-100%);
        transform:translateX(-100%);
    }
    }
    @keyframes drift{
    0%
    {
        -webkit-transform:translateX(0);
        transform:translateX(0);
    }
    to{
        -webkit-transform:translateX(-100%);
        transform:translateX(-100%);
    }
    }
    .svg {
        width:1800vw;
        -webkit-animation:drift 200s linear infinite alternate;
        animation:drift 200s linear infinite alternate;
    }

    .global{
        position:relative;
    }

    .title{
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        margin-bottom:8%;
        position:absolute;
        left: 2%;
        top: 12%;
        z-index: 1;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        display: flex;
        align-items: center;
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:8%;
            position:absolute;
            left: 3.2%;
            top: 9%;
            z-index: 1;
        }
        .svg {
            width:1300vw;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display: flex;
        align-items: center;
        .global{
            padding-bottom:20%;
        }
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:8%;
            position:absolute;
            left: 4.5%;
            top: 15%;
            z-index: 1;
        }
        .svg {
            width:1000vw;
            img{
                width:200%; 
            }
        }
    }
    @media only screen and (max-height: 768px) and (max-width: 1024px) and (orientation:landscape){
        .title{
            left: 4.5%;
            top: 15%;
        }
        .svg {
            width:1000vw;
            img{
                width:200%; 
            }
        }
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){      
        display: flex;
        align-items: center;
        padding-top:18%;
        
        .global{
            padding-bottom:20%;
        }
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:8%;
            position:absolute;
            left: 4.5%;
            top: 15%;
            z-index: 1;
        }
        .svg {
            width:1000vw;
            img{
                width:155%; 
            }
        }
        .scroll1,.scroll3,.scroll2, .scroll4{
            display:block;
            margin-bottom: 0.1%;
        }
    }
    @media only screen and (min-width:1441px){
        display: flex;
        align-items: center;
        .global{
            padding-bottom:20%;
        }
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:0%;
            position:absolute;
            left: 6.6%;
            top: 14.6%;
            z-index: 1;
        }
        .svg {
            width:700vw;
            img{
                width:200%; 
            }
        }
        .scroll1,.scroll3,.scroll2, .scroll4{
            display:block;
            margin-bottom: 0.1%;
        }

    }
`;

export { ServicesStyle };
