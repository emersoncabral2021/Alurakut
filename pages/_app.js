import { createGlobalStyle, ThemeProvider } from 'styled-components'
 import {AlurakutStyles} from '../src/lib/AlurakutComuns'

// const GlobalStyle configuraçao globais de css
const GlobalStyle = createGlobalStyle`

/* Reset css*/
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-image: url(' https://imgix.bustle.com/uploads/image/2020/11/6/be27b69a-ab5d-4840-8fda-c378a2ffbe16-genshin-impact-normalhero-01-ps4-17aug20-en-us.jpeg?w=2000&h=1090&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5453333333333333&fp-y=0.6262626262626263');
    background-color: #000000;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    font-family: sans-serif;

  }
  #_next{
    display:flex;
    min-heigth:100vh;
    flex-direction:column;
  }
  img{
    max-width:100%;
    height:auto;
    display:block;
  }
  https://imgix.bustle.com/uploads/image/2020/11/6/be27b69a-ab5d-4840-8fda-c378a2ffbe16-genshin-impact-normalhero-01-ps4-17aug20-en-us.jpeg?w=2000&h=1090&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5453333333333333&fp-y=0.6262626262626263
  ${AlurakutStyles}
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
