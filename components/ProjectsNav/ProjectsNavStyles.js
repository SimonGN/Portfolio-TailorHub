import styled from 'styled-components';

const ProjectNavStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  padding-top:10%;
  padding-bottom:15%;
  color: ${props => (props.color ? props.color : '#0F1C51')};
  a {
    color: ${props => (props.color ? props.color : '#0F1C51')};

    &:visited {
      color: ${props => (props.color ? props.color : '#0F1C51')};
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    width: 80%;
    padding-top:5%;
    padding-bottom:8%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 80%;
    padding-top:5%;
    padding-bottom:8%;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 80%;
    padding-top:3%;
    padding-bottom:5%;
  }
  @media only screen and (min-width: 1441px) {
    width: 80%;
    padding-top:3%;
    padding-bottom:5%;
  }
`;

export default ProjectNavStyles;
