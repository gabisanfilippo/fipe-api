import styled, { createGlobalStyle } from "styled-components";

import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ['latin'] });

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: ${roboto.style.fontFamily};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  p{
    font-size: 1rem;
  }
  h6{
    font-size: 1.2rem;
    font-weight: 400;
  }
  h5{
    font-size: 1.3rem;
    font-weight: 500;
  }
  h4{
    font-size: 1.4rem;
    font-weight: 600;
  }
  h3{
    font-size: 1.6rem;
    font-weight: 700;
  }
  h2{
    font-size: 1.8rem;
    font-weight: 800;
  }
  h1{
    font-size: 2rem;
    font-weight: 900;
  }

  :root{
    --color-lilac: #F9F6FC;
    --color-purple: #5d00c0;
    --color-green-light: #dcf4f2;
    --color-green-dark: #00a48c;
    --color-white: #fff;
    --color-black: #000; 
  }
`;
