import React from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import cartSlice, { selectCart, selectCartProductIds } from "./cartSlice";
import { Cart } from "./Cart";

export const Carts = () => {
  const data = useSelector(selectCart);
  const cartProductIds = useSelector(selectCartProductIds);
  const dispatch = useDispatch();
  const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions;

  // console.log("data take useSelector(selectCart) ", data);
  // console.log(11111, cartProductIds);

  return (
    <div>
      <hr />
      <h2>Cart item {cartProductIds.length}</h2>
      <button onClick={() => dispatch(clearAllItems())}>clear cart</button>
      <div className={styles.cartProductWrapper}>
        {cartProductIds?.map((item) => (
          <Cart item={item} key={item} />
        ))}
      </div>
      <hr />
      {!data ? (
        <h2>Loading ...</h2>
      ) : (
        <div className={styles.cartsWrapper}>
          {data?.map((item, idx) => (
            <div className={styles.cart} key={idx}>
              <h3>{item.name}</h3>
              <a href={item.url}>See more</a>
              <br />
              {!cartProductIds.includes(item.id) && (
                <button onClick={() => dispatch(addToCart(item.id))}>
                  Add to cart
                </button>
              )}
              {cartProductIds.includes(item.id) && (
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from cart
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
