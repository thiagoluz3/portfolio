import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { lighten } from 'polished'

import theme from '../src/theme.js'


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.background};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
    background: ${props => lighten(0.4, props.theme.primary)};
  }
}
body {
  background: ${props => props.theme.background};
  font-family: 'Roboto', sans-serif;
}
img {
  width: 100%;
  max-width: 100%;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}

.container {
  width: 100%
  margin: 0 auto;
  max-width: 85rem;
  padding: 0 1rem;
  @media(max-width:1450px){
    max-width: 70rem;
  }
  @media(max-width:1000px){
    max-width: 50rem;
  }
  @media(max-width:700px){
    padding: 0 2rem;
  }
}


`

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default App