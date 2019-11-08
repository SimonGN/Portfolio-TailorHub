import styled from 'styled-components';

const Fonth1 = styled.h1`
  font-family: "Grabenbach";
  color: ${props => (props.color === 'white' ? 'white' : '#0F1C51')};
  font-size: 1.8rem;
  letter-spacing: 0.07rem;
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.1rem;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: 2.2rem;
  }
  @media only screen and (min-width: 1441px) {
    font-size: 2.4rem;
  }
`

export default Fonth1;
