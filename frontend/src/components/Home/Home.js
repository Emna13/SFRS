
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getProduct } from "../../js/actions";

import Nav from "../NavBar/Nav";

import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const loading = useSelector((state) => state.productReducer.loading);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const add = () => {
      dispatch(addOrder())
  }
  

  return (
    <div>
    </div>
  );
};

export default Home;
