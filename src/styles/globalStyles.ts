import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html{ 
        scroll-behavior: smooth;
    }

    body {
        max-width: 100vw;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        font-size: 12px;
        line-height: 1.17;
        color: #000000;
        background-color: #ffffff;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    ul {
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style-type: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    li {
        margin: 0;
        padding: 0;
    }

    input {
        margin: 0;
        padding: 0;
        background: transparent;
        border: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
    }
`;

export default GlobalStyle;
