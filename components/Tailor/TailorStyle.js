import styled from 'styled-components';

const TailorStyle = styled.div`
  height: 89vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-animation: fadeOut 6s ease 0.01s;
  -webkit-animation-fill-mode: forwards;
  animation: fadeOut 6s ease 0.01s;
  animation-fill-mode: forwards;

  background-color: #0f1c51;
  .logo {
    height: 8vh;
    margin-bottom: 4%;
  }
  p {
    text-align: center;
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
      top:0;
    }

    50% {
      opacity: 1;
      top: -45vh;
    }

    100% {
      opacity: 0;
      height: 0;
      top: -100vh;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      top: 0;
    }

    50% {
      opacity: 1;
      top: -45vh;
    }

    100% {
      opacity: 0;
      height: 0;
      top: -100vh;
    }
  }

  
`;

export { TailorStyle };
