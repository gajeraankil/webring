import styled from "styled-components";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <Wrapper>
      <Slider />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 95px;
`;

export default Home;
