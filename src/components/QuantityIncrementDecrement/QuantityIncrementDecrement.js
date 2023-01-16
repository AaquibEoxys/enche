import React, { useState } from "react";
import "./QuantityIncrementDecrement.scss";

const QuantityIncrementDecrement = () => {
  const [Quantity, setQuantity] = useState(0);
  const add = () => {
    setQuantity((count) => count + 1);
  };
  const remove = () => {
    if (Quantity > 0) {
      setQuantity((count) => count - 1);
    }
  };

  return (
    <>
      <div className="qntty_sec_cntr col-2">
        {
          <div className="add_qntty">
            <button onClick={remove}>-</button>
            <button disable>{Quantity}</button>
            <button onClick={add}>+</button>
          </div>
        }
      </div>
    </>
  );
};

export default QuantityIncrementDecrement;
