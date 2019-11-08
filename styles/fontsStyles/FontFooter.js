import styled from 'styled-components';


const Fonth1 = styled.p`
    font-family: "Grabenbach";
    color: ${props => (props.color === 'white' ? 'white' : '#0F1C51')};
    font-size: 0.9rem;
    letter-spacing: 0.07rem;
    line-height:1.4rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    white-space: nowrap;

    @media only screen and (min-width:415px) and (max-width:768px){
        font-size: 1.2rem;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 0.9rem;
        writing-mode: ${props => (props.writing === 'vertical-rl' ? 'vertical-rl' : 'inherit')};
        transform: ${props => (props.rotate === 'rotate(180deg)' ? 'rotate(180deg)' : 'rotate(0)')};
        margin:0;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1rem;
        writing-mode: ${props => (props.writing === 'vertical-rl' ? 'vertical-rl' : 'inherit')};
        transform: ${props => (props.rotate === 'rotate(180deg)' ? 'rotate(180deg)' : 'rotate(0)')};
        margin:0;
    }
    @media only screen and (min-width:1441px){
        font-size: 1rem;
        writing-mode: ${props => (props.writing === 'vertical-rl' ? 'vertical-rl' : 'inherit')};
        transform: ${props => (props.rotate === 'rotate(180deg)' ? 'rotate(180deg)' : 'rotate(0)')};
        margin:0;
    }
`;

export default Fonth1;
