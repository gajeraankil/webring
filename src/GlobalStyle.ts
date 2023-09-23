import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ::selection {
        user-select: none;
    }

    *{
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.white};
        font-family: 'Roboto';
        font-size: 16px;
        line-height: 1.7em;
    }

    ul,ol{
        padding: 0;
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    img{
        max-width: 100%;
        height: auto;
    }

    .py-100 {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .section-heading {
        margin-bottom: 50px;

        .title {
            font-family: 'Spicy Rice';
            font-size: 40px;
            color: ${({ theme }) => theme.colors.primary};
            margin-bottom: 8px;
            letter-spacing: 0.05em;
        }

        .sub-title {
            color: ${({ theme }) => theme.colors.secondary};
            margin-bottom: 15px;
            letter-spacing: 1px;
        }
    }
`;

export default GlobalStyle;
