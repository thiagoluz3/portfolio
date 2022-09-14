import styled from "styled-components";
import HomeHero from "./HomeHero";


const ContainerContent = styled.main`

display:flex;
flex-direction: column;
color: white;
padding-top:50px;

`

function ContainerCont() {
  return (
    <ContainerContent>
      <HomeHero/>
    </ContainerContent>
  )
}

export default ContainerCont