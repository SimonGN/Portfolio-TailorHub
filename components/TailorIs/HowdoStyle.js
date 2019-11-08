import styled from 'styled-components';


const HowDoStyle = styled.div`
    background-color: #dae1ff;
    .conteiner1{
        padding-top: 25%;
        padding-bottom: 25%;
        width: 93vw;
        height:auto;
        margin: 0 auto;
        display:flex;
        flex-flow:column;
        justify-content:center;
    }
    .title{
        margin-bottom:8%;
        
    }
    p{
        margin-bottom:5%;
    }
    .text1{
        margin-bottom:20%;
    }
    .imgValors {
        width: 100%;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        .title{
            margin-bottom:6%;
        }
        .imgValors {
            width: 60%;
        }
        .text2{
            text-align: center;
        }
    }

    @media only screen and (min-width:769px) and (max-width:1024px){

        display: flex;
        align-items: center;
        justify-content: center;
        
        .conteiner1{
            padding-top: 20%;
            padding-bottom: 20%;
            width: 95vw;
            margin: 0 auto;
            display:flex;
            flex-flow:row;
            justify-content: center;
            align-items: center;
        }
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom:4%;
            order:2;
            white-space: nowrap;
            margin-top: 3%;
        }
        .text1, .text2{
            width: 36vw;
        }
        .text1{
            order:1;
            margin-bottom:0;

        }
        .text2{
            order:3;
        }
        .imgValors {
            width: 100%;
        }
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .conteiner1{
            padding-top: 20%;
            padding-bottom: 20%;

            width: 80vw;
            margin: 0 auto;
            display:flex;
            flex-flow:row;
            justify-content: center;
            align-items: center;
        }
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-bottom: 0;
            order:2;
            white-space: nowrap;
            width: 10%;
            display: flex;
            align-items: center;
            margin-left: 19px;   
            margin-top: 0;
        }
        .text1, .text2{
            width: 45%;
        }
        .text1{
            order:1;
            margin-bottom:0;

        }
        .text2{
            order:3;
        }
        .imgValors {
        width: 100%;
        }
    }
    @media only screen and (min-width:1441px){

        .conteiner1{
            padding-top: 20%;
            padding-bottom: 20%;
            width: 80vw;
            margin: 0 auto;
            display:flex;
            flex-flow:row;
            justify-content: center;
            align-items: center;
        }
        .title{
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            margin-left: 0px;
            margin-bottom: 0px;
            order:3;
            white-space: nowrap;
            align-items: flex-start;
            display:flex;
            margin-top: 0%;
            width: 10%;
            align-items:center;
            margin-right: 0px;
        }
        .text1, .text2{
            width: 35%;
        }
        .text1{
            order:1;
            margin-bottom:0;
        }
        .text2{
            order:3;
        }
        .imgValors {
        width: 100%;
        }
    }
`;

export {HowDoStyle};
