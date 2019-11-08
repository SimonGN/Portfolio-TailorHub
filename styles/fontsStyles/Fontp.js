import styled from 'styled-components';


const Fontp = styled.p`
    font-family: "Grabenbach-regular";
    color: ${props => (props.color === 'white' ? 'white' : props.color === '#e50071' ? '#e50071' : '#0F1C51')};
    line-height: 1.6rem;
    font-size: 1.1rem;
    letter-spacing: 0.07rem;
    cursor: ${props => (props.cursor === true ? 'pointer' : '')};
    text-decoration: ${props => (props.decoration === 'underline' ? 'underline' : 'none')};
    
 

    @media only screen and (min-width:415px) and (max-width:768px){
        font-size: 1.2rem;
        line-height: 2rem;
        writing-mode: ${props => (props.writing === 'vertical-rl' ? 'vertical-rl' : 'inherit')};
        transform: ${props => (props.rotate === 'rotate(180deg)' ? 'rotate(180deg)' : 'rotate(0)')};

    }

    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 1.1rem;
        line-height: 1.9rem;
        writing-mode: ${props => (props.writing === 'vertical-rl' ? 'vertical-rl' : 'inherit')};
        transform: ${props => (props.rotate === 'rotate(180deg)' ? 'rotate(180deg)' : 'rotate(0)')};

    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1.3rem;
        line-height: 2rem;
        writing-mode: ${props => (props.writing === 'vertical-rl' ? 'vertical-rl' : 'inherit')};
        transform: ${props => (props.rotate === 'rotate(180deg)' ? 'rotate(180deg)' : 'rotate(0)')};

    }
    @media only screen and (min-width:1441px){
        font-size: 1.5rem;
        line-height: 2.3rem;
        writing-mode: ${props => (props.writing === 'vertical-rl' ? 'vertical-rl' : 'inherit')};
        transform: ${props => (props.rotate === 'rotate(180deg)' ? 'rotate(180deg)' : 'rotate(0)')};


    }
`;

export default Fontp;
