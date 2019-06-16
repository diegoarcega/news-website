import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root { height: 100%; }

  body {
    background: linear-gradient(to left top, ${props => props.theme.backgroundColor} 10%, ${props =>
  props.theme.foregroundColor} 100%);
    font-weight: 100;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Quicksand", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
