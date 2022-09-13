import styled from "styled-components"
import { lighten } from "polished";


const Teste = styled.a`
{
  font-size:50px;
  display:flex;
  align-items:center;
  text-transform: uppercase;
      color: ${props => props.isActive ? props.theme.primary : props.theme.textHighlight};
      transition: .5s;
      text-decoration: none;

      &:hover {
        color: ${props => props.isActive 
                            ? lighten(0.4, props.theme.primary) 
                            : lighten(0.4, props.theme.textHighlight)}
}

`

function Logo( {link, text}) {
  return (
      <Teste href={link} isActive={isActive}> 
        {text}
      </Teste>
      )
}

Logo.defaultProps = {   /*mantem por padrão 30px caso não seja informado */
  size: '30px'
}

const isActive = true;


export default Logo
