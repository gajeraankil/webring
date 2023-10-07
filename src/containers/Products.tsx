import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  return <Wrapper>{category}</Wrapper>;
};

const Wrapper = styled.section`
  margin-top: 95px;
`;

export default Products;
