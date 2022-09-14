import ContainerContent from "../src/components/container/Container"
import Header from "../src/components/header/Header"
import HomeContainer from "../src/components/container/HomeStyles"




function HomePage () {
  
  return (
    <>
      <HomeContainer>
        <Header/>
        <ContainerContent/>
      </HomeContainer>
    </>
    
  )
}

export default HomePage