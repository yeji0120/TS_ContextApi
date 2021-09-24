import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
  }
  input, button{
    border: none;
    outline: none;
  }
  ol, ul, li{
    list-style:none;
  }
`;

export default GlobalStyle;
