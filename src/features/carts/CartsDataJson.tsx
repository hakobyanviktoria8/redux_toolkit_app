import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./cartDataJsonSlice";

interface CartType {
  id: number;
  name: string;
  url: string;
}

export const CartsDataJson = () => {
  const state = useSelector((state: any) => state);
  const { products } = state;
  let data = products?.data;

  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:3000/carsDataJson"));
  }, [dispatch]);

  return (
    <div>
      <h2>CartsDataJson</h2>
      {data?.map((item: CartType) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
        </div>
      ))}
      <hr />
    </div>
  );
};
