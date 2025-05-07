import React, { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";

function Basket() {
  const { basket, removeBasket } = useContext(BasketContext);
  return (
    <>
      <h1>Basket</h1>
      <div>
        {basket.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>
              <button onClick={() => removeBasket(item.id)}>remove</button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Basket;
