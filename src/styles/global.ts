import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;    
    
    font-family: "Lato", sans-serif;
  }
  
  html, body #root {
    height: 100%;           
  }  
`;
