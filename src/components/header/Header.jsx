import styled from "styled-components";
import NavLink from "./NavLink";

const HeaderContainer = styled.header`
width: 100%;
height: 5rem;
display:flex;
align-items:center;
border-bottom: 1px solid ${props => props.theme.backgroundLight};
`

const Container = styled.div`
width: 100%;
margin: 0 auto;
padding: 20px 15px;
display:flex;
justify-content: space-between;
align-itens:center;
`
const ContainerMenu = styled.nav`
ul{
    padding: 0;
    margin:0;
    list-style-type: none;
    display: flex;
    gap:50px;
    justify-content: end;
    align-items:center;
}
`

function Header() {
  return (
  
    <>
      <HeaderContainer>
        <Container>
          <div>
            <NavLink link="Logo" path="/"/>
          </div>
          <div>
            <ContainerMenu>
            <ul>
              <NavLink link="Projects" path="/"/>
              <NavLink link="About" path="/"/>
              <NavLink link="contact" path="/"/>
            </ul>
            </ContainerMenu>
            
        </div>
        </Container>
     </HeaderContainer>
    </>
  )
}

export default Header
