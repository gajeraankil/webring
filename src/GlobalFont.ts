import { createGlobalStyle } from "styled-components";

const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-BlackItalic.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-BlackItalic.woff') format('woff');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-Black.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-Bold.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-BoldItalic.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-Light.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-Italic.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-Medium.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-LightItalic.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-LightItalic.woff') format('woff');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-MediumItalic.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-MediumItalic.woff') format('woff');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-Regular.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-ThinItalic.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-ThinItalic.woff') format('woff');
        font-weight: 100;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('src/assets/fonts/Roboto-Thin.woff2') format('woff2'),
            url('src/assets/fonts/Roboto-Thin.woff') format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spicy Rice';
        src: url('src/assets/fonts/SpicyRice-Regular.woff2') format('woff2'),
            url('src/assets/fonts/SpicyRice-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
`;

export default GlobalFont;
