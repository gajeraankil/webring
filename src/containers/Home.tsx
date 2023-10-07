import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Home = () => {
  const { t } = useTranslation();

  return <Wrapper>{t("Home")}</Wrapper>;
};

const Wrapper = styled.section`
  margin-top: 95px;
`;

export default Home;
