import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../js/actions";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  //   console.log("products", products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
      <>
      <h1>Add a new product</h1>
    <div className="container" style={{ marginTop: "50px", }}>
      <div className="row">
        {products &&
          products.map((product) => (
            <div className="col-md-4">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default Products;
