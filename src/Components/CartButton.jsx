import React from "react";

const CartButton = ({ onChange, quantity }) => {

  return (
   <div className="change_quantity_container" style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
      {/* use className and data-cy as given in problem */}
      <button data-cy = "inc_btn" onClick={() => onChange(quantity + 1)} style={{margin: "5px"}} >+</button>
      <p className="quantity" style={{margin: "5px"}}>{quantity}</p>
      <button data-cy = "dec_btn" onClick={() => onChange(quantity - 1)} style={{margin: "5px"}}>-</button>
    </div>
  )
};

export default CartButton;
