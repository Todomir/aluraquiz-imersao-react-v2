import { createGlobalStyle, DefaultTheme } from 'styled-components'

export interface ITheme extends DefaultTheme {
  theme: {
    colors: {
      primary: string
      secondary: string
      bg: string
      contrastText: string
      wrong: string
      success: string
    }
    borderRadius: string
  }
}

const GlobalStyle = createGlobalStyle`
  *, input, button {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Work Sans', sans-serif;
    color: ${({ theme }: ITheme) => theme.colors.contrastText};
  }

  input {
    font-family: 'Work Sans', sans-serif;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    letter-spacing: -0.75px;
  }

  html, body {
    min-height: 100vh;
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
