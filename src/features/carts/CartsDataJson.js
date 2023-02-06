import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./cartDataJsonSlice";

export const CartsDataJson = () => {
  const state = useSelector((state) => state);
  const { products } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:3000/carsDataJson"));
  }, [dispatch]);

  return (
    <div>
      <h2>CartsDataJson</h2>
      {products.data?.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
        </div>
      ))}
      <hr />
    </div>
  );
};
