import styled from 'styled-components';


const FontInfo = styled.p`
    font-family: "Grabenbach-regular";
    color: ${props => (props.color === 'white' ? 'white' : '#0F1C51')};
    font-size: 0.7rem;
    line-height: 1.4rem;
    letter-spacing: 0.07rem;

    @media only screen and (min-width:415px) and (max-width:768px){
        font-size: 1.2rem;
        line-height: 2rem;
    }

    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 1.3rem;
        line-height: 2.05rem;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1.1rem;
        line-height: 1.9rem;
    }
    @media only screen and (min-width:1441px){
        font-size: 1.1rem;
        line-height: 1.9rem;

    }
`;

export default FontInfo;
