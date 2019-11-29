import styled from 'styled-components';


const FontTitle= styled.h1`
    font-family: "Grabenbach";
    color: ${props => (props.color === 'white' ? 'white' : '#0F1C51')};
    font-size: 2rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};


`;

export default FontTitle;
