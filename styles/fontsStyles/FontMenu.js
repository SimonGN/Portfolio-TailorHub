import styled from 'styled-components';


const FontMenu = styled.a`
    font-family: "Grabenbach-regular";
    color: ${props => (props.color === '#0F1C51' ? '#0F1C51' : 'white')};
    line-height: 1.8rem;
    font-size:  1.2rem;
    letter-spacing: 0.07rem;
    cursor: pointer;

    @media only screen and (min-width:415px) and (max-width:768px){
            font-size: 1.3rem;
    }

    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size:1.1rem;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1.1rem;
    }
    @media only screen and (min-width:1441px){
        font-size: 1.2rem;

    }
`;

export default FontMenu;
