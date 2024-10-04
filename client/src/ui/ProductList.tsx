import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <Container>
      <div className="">
        <div className="flex items-center justify-between">
          <Title text="Top Selling Products" />
          <Link to={"/product"}>View All Products</Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
