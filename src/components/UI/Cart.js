import React from "react";
import { IoIosCart } from "react-icons/io";

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "red",
          width: "21px",
          height: "20px",
          borderRadius: "10px",
          fontSize: "13px",
          color: "white",
          border: "1px solid #fff",
          textAlign: "center",
          alignSelf: "center",
          top: "-40px",
          right: "-18px",
        }}
      >
        {props.count}
      </span>
      {/* <IoIosCart /> */}
    </div>
  );
};

export default Cart;