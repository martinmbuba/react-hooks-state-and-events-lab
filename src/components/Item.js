import React, { useState } from "react";

function Item({ name, category }) {
  // state variable to track if item is in cart
  const [inCart, setInCart] = useState(false);

  // toggle inCart state
  function handleClick() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
