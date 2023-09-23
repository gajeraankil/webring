import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import GlobalFont from "./GlobalFont";
import Home from "./containers/Home";
import "./i18n";

const App = () => {
  const theme = {
    colors: {
      primary: "#C62127",
      secondary: "#3B3A3C",
      white: "#FFFFFF",
      yellow: "#F4b323",
      background: "#F4F4F4",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
