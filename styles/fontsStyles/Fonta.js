import styled from 'styled-components';


const Fonta = styled.a`
    font-family: "Grabenbach";
    color: ${props => (props.color === 'white' ? 'white' : '#0F1C51')};
    line-height: 25px;
    font-size: 18px;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    text-decoration:none;
    cursor: pointer;

@media only screen and (min-width:415px) and (max-width:768px){
        
}

@media only screen and (min-width:769px) and (max-width:1024px){
    
}
@media only screen and (min-width:1025px) and (max-width:1440px){
    
}
@media only screen and (min-width:1441px){

}
`;

export default Fonta;
