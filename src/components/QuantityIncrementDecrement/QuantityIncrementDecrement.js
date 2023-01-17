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
      <div className="qntty_sec_cntr">
        <div className="add_qntty">
          <button className="quantity_minus" onClick={remove}>
            -
          </button>
          <button className="quantity" disable>
            {Quantity}
          </button>
          <button className="quantity_plus" onClick={add}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default QuantityIncrementDecrement;
