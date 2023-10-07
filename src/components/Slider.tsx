import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const Slider = () => {
  return (
    <Wrapper>
      <Carousel>
        <Carousel.Item className="slider-1">
          <Carousel.Caption>
            <h3>Herbs & Spices</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-2">
          <Carousel.Caption>
            <h3>The choice of chefs</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-3">
          <Carousel.Caption>
            <h3>All Organic Spices</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .carousel-inner .carousel-item {
    height: 80vh;
    background: cover center/cover no-repeat;

    .carousel-caption h3 {
      font-family: "Spicy Rice";
      font-size: 58px;
    }
  }
`;

export default Slider;
