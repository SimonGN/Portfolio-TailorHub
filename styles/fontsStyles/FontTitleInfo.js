import styled from 'styled-components';


const FontTitleInfo = styled.h1`
    font-family: "Grabenbach";
    color: ${props => (props.color === 'white' ? 'white' : '#0F1C51')};
    font-size: 1rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    @media only screen and (min-width:415px) and (max-width:768px){
        font-size: 1.5rem;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 1.1rem;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        margin:0;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1rem;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        margin:0;
    }
    @media only screen and (min-width:1441px){
        font-size: 1.2rem;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        margin:0;
    }
`;

export default FontTitleInfo;
