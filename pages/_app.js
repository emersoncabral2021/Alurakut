import { createGlobalStyle, ThemeProvider } from 'styled-components'
// const GlobalStyle configuraçao globais de css
const GlobalStyle = createGlobalStyle`

/* Reset css*/
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #D9E6F6;
    font-family: sans-serif;
  }
  #_next{
    display:flex;
    min-heigth:100vh;
    flex-direction:column;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
