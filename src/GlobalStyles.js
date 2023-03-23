import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    font-family: 'Roboto', sans-serif;
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    transition: all .4s ease;

background-repeat: no-repeat;
background-attachment: fixed;


}
`
export default GlobalStyle

