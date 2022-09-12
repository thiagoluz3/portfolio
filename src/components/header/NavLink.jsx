import styled from "styled-components";
import Link from 'next/link';
import { lighten } from "polished";


const NavLinkContainer = styled.li`
    a{
      text-transform: uppercase;
      color: ${props => props.isActive ? props.theme.primary : props.theme.textHighlight};
      transition: .5s;
      text-decoration: none;

      &:hover {
        color: ${props => props.isActive 
                            ? lighten(0.4, props.theme.primary) 
                            : lighten(0.4, props.theme.textHighlight)}
      } 
    }
`

function NavLink({link, path}) {
  return (
    
      <NavLinkContainer isActive={isActive}>
        <Link href={path}>
          <a>{link}</a>
        </Link>      
      </NavLinkContainer>
    
    
  )
}

const isActive = true;

export default NavLink


