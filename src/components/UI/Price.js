import React from "react";
import { Icon } from '@iconify/react';
// import { BiRupee } from "react-icons/bi";

/**
 * @author
 * @function Price
 **/

const Price = (props) => {
  return (
    <div
      style={{
        fontSize: props.fontSize ? props.fontSize : "14px",
        fontWeight: "bold",
        margin: "5px 0",
      }}
    >
      <Icon icon="mdi:currency-bdt" />
      {props.value}
    </div>
  );
};

export default Price;