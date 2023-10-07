import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import enImg from "../assets/images/united-kingdom.png";
import deImg from "../assets/images/german.png";
import i18n from "../i18n";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper className="position-fixed top-0 w-100">
      <div className="top-bar py-1">
        <Container>
          <div className="row">
            <div className="col-12 col-md-4">
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  size="sm"
                  className="py-0 px-3 text-white rounded-1"
                >
                  Select Language: {language.toUpperCase()}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    className="bg-transparent"
                    onClick={() => handleLanguageChange("en")}
                  >
                    <img className="me-3" src={enImg} alt="en" />
                    English
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="bg-transparent"
                    onClick={() => handleLanguageChange("de")}
                  >
                    <img className="me-3" src={deImg} alt="de" />
                    Deutsch
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-md-8 d-none d-md-block text-end">
              <Link
                to="tel:+91 98799 91276"
                className="d-inline-block text-white pe-3"
              >
                <FaPhoneAlt className="text-white pe-1" />
                +91 98799 91276
              </Link>
              <Link
                to="tel:+91 98799 91277"
                className="d-inline-block text-white pe-3"
              >
                <FaPhoneAlt className="text-white pe-1" />
                +91 98799 91277
              </Link>
              <Link
                to="tel:+91 98799 91278"
                className="d-inline-block text-white pe-3"
              >
                <FaPhoneAlt className="text-white pe-1" />
                +91 98799 91278
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-white">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <img
              className="d-inline-block align-top"
              src={logo}
              alt="WeBring"
            />
          </NavLink>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 shadow-none"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link me-2" to="/">
                {t("Home")}
              </NavLink>
              <NavDropdown
                title={t("Our Products")}
                className="me-2"
                active={location.pathname === "/products"}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  className="bg-transparent"
                  to="/products?category=lentils-beans"
                  active={category === "lentils-beans"}
                >
                  {t("Lentils & Beans")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  className="bg-transparent"
                  active={category === "spices"}
                  to="/products?category=spices"
                >
                  {t("Spices")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  className="bg-transparent"
                  active={category === "flours"}
                  to="/products?category=flours"
                >
                  {t("Flours")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  className="bg-transparent"
                  active={category === "mango-products"}
                  to="/products?category=mango-products"
                >
                  {t("Mango Products")}
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link me-2" to="/about">
                {t("About Us")}
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                {t("Contact Us")}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  z-index: 1;
  .top-bar {
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;

    .dropdown button {
      border: 1px solid ${({ theme }) => theme.colors.white};
      font-size: 12px;
    }

    .dropdown-menu {
      --bs-dropdown-min-width: 152px;

      .dropdown-item {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 14px;
      }
    }
  }

  .navbar {
    box-shadow: 0 10px 14px -14px rgba(34, 34, 34, 0.53);

    .navbar-brand img {
      max-width: 226px;
    }

    .navbar-nav,
    .dropdown-menu {
      .nav-link,
      .dropdown-item {
        color: ${({ theme }) => theme.colors.secondary};

        &.active {
          color: ${({ theme }) => theme.colors.primary};
          font-weight: 500;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      .nav-item.active .nav-link,
      .dropdown-item.active {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 500;
      }
    }
  }
`;

export default Header;
