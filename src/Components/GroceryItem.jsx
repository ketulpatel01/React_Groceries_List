import React, { useState } from "react";
import CartButton from "./CartButton";

const GroceryItem = ({ name, image, price }) => {

  const [quantity, setQuantity] = useState(1)
  const [showCart, setShowCart] = useState(false)
  // recive name, image, and price as props

  return (
    <div style={{ display: "flex", float: "left", alignItems: "center" }}>
      <div className="grocery_card" style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        maxWidth: "200px",
        height: "250px",
        margin: "10px 5px"
      }}>
        <img src={image} alt={name} style={{ width: "150px", height: "150px" }} />
        <h3 style={{ margin: "10px" }}>{name}</h3>
        <h5 style={{ margin: "0 0 10px 0" }}>{price}</h5>
        {!showCart || quantity < 1 ? (
          <button data-cy="add_to_cart" onClick={() => { setQuantity(1); setShowCart(true); }} >
            Add to Cart
          </button>
        ) : (
          <CartButton quantity={quantity} onChange={setQuantity} />
        )}
      </div>
    </div>
  )
};

export default GroceryItem;
