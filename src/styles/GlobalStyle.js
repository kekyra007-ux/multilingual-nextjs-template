import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


@font-face {
  font-family: "Anybody";
  src: url("/fonts/Anybody-VariableFont.woff2") format("woff2");
  font-weight: 100 900;
  font-stretch: 75% 125%;
  font-display: swap;
}

@font-face {
  font-family: "Anybody";
  src: url("/fonts/Anybody-Italic-VariableFont.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-stretch: 75% 125%;
  font-display: swap;
}

/* ==== SOURCE CODE PRO ==== */

@font-face {
  font-family: 'Source Code Pro';
  src: url('/fonts/SourceCodePro-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: 'Source Code Pro';
  src: url('/fonts/SourceCodePro-Italic-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}
  /* ==== ОБНУЛЕНИЕ ==== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      font-family: ${({ theme }) => theme.font.family.primary};

  }



  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
        transition: opacity 0.2s ease-in-out;
              animation: fadeIn 0.3s ease-in-out;
// background:
//   linear-gradient(
//     180deg,
//     rgba(41, 12, 11, 0.71) 0%,
//     rgba(149, 40, 40, 0.58) 45%,
//     rgba(149, 33, 12, 0.57) 100%
//   ),
//   url("/bg-site.avif");

//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center top;
//   background-attachment: fixed;

  }

  html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}

   main, section {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Анимация для спиннера */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
    
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size["4xl"]};
    ${({ theme }) => theme.mq.md} {
      font-size: ${({ theme }) => theme.font.size["5xl"]};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size["3xl"]};
    ${({ theme }) => theme.mq.md} {
      font-size: ${({ theme }) => theme.font.size["4xl"]};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size["2xl"]};
    ${({ theme }) => theme.mq.md} {
      font-size: ${({ theme }) => theme.font.size["3xl"]};
    }
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }


`;

export default GlobalStyle;
