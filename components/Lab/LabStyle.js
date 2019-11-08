import styled from 'styled-components';

const LabStyle = styled.div`
  @keyframes transition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  p::selection {
    background: #0f1c51;
    color: #fff46c;
  }

  background-color: #fff46c;
  min-height: 100vh;
  a {
    cursor: pointer;
  }
  p {
    margin-bottom: 5%;
  }
  display: flex;
  align-items: center;
  .global {
    padding-top: 30%;
    width: 90vw;
    margin: 0 auto;
    padding-bottom: 40%;
  }
  .parraf1 {
    animation: transition 3s;
  }
  .parraf2 {
    animation: transition 4s;
  }
  .parraf3 {
    animation: transition 5s;
  }
  .parraf4 {
    animation: transition 5s;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    .global {
      padding-top: 0;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    .global {
      padding: 0;
      width: 80vw;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .global {
      padding: 0;
      width: 75vw;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1441px) {
    .global {
      padding: 0;
      width: 67vw;
      margin: 0 auto;
    }
  }
`;

export { LabStyle };
