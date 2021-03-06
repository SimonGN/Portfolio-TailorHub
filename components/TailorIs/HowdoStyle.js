import styled from 'styled-components';


const HowDoStyle = styled.div`
    background-color: #dae1ff;
    margin-bottom: 100px;
    p{
        margin-bottom:15px;
    }
    .conteiner1{
        padding-top: 100px;
        padding-bottom: 100px;
        width: 93vw;
        height:auto;
        margin: 0 auto;
        display:flex;
        flex-flow:column;
        justify-content:center;
    }
    .title {
        margin-bottom: 20px;
    }

    .text1{
        margin-bottom:25px;
    }
    .imgValors {
        width: 100%;
    }

    @media only screen and (min-width:415px) and (max-width:768px){
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
        margin-bottom: 130px;
        
        .conteiner1{
            padding-top: 130px;
            padding-bottom: 130px;
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
        margin-bottom: 130px;
        .conteiner1{
            padding-top: 130px;
            padding-bottom: 130px;
            width: 80vw;
            margin: 0 auto;
            display:flex;
            flex-flow:row;
            display: flex;
            justify-content: space-between;
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
            width: 40%;
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
        margin-bottom: 150px;
        display: flex;
        justify-content: space-between;
        .conteiner1{
            padding-top: 150px;
            padding-bottom: 150px;
            width: 75vw;
            margin: 0 auto;
            display:flex;
            flex-flow:row;
            display: flex;
            justify-content: space-between;
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
            width: 40%;
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
