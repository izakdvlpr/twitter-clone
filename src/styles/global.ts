import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;  
    
    color: ${colors.white}  
  }
  
  html, body #root {
    max-height: 100vh;           
    max-width: 100vw;
    
    height: 100%;           
    width: 100%;
  }  
  
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  html {
    background: ${colors.primary}
  }
`;
