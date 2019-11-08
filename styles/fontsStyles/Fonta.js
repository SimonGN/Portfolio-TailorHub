import styled from 'styled-components';


const Fonta = styled.a`
    font-family: "Grabenbach";
    color: ${props => (props.color === 'white' ? 'white' : '#0F1C51')};
    font-size: 1.2rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    text-decoration:none;
    cursor: pointer;
}

    @media only screen and (min-width:415px) and (max-width:768px){
        font-size: 1.2rem;
}

@media only screen and (min-width:769px) and (max-width:1024px){
    font-size: 1.5rem;
}
@media only screen and (min-width:1025px) and (max-width:1440px){
    font-size: 1.3rem;
}
@media only screen and (min-width:1441px){
    font-size: 1.5rem;

}
`;

export default Fonta;
