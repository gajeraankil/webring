import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalFont from "./GlobalFont";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Products from "./containers/Products";
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
