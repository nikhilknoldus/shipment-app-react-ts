import React from "react";
import "./select.styles.scss";

import { ShipmentContext } from "./../../store/shipmentContext";

const SelectComponent: React.FC<any> = () => {
  const [shipmentData, dispatch]: any = React.useContext(ShipmentContext);

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "ORDERBYITEM", payload: evt.target.value });
  };

  const handleOrder = (evt: any) => {
    if (evt.target.checked) {
      dispatch({ type: "ORDERBY", payload: "DES" });
    } else {
      dispatch({ type: "ORDERBY", payload: "ASC" });
    }
  };

  return (
    <div className="select-container">
      <p className="sort-by">Sort by</p>
      <label className="switch">
        <input type="checkbox" onChange={evt => handleOrder(evt)} />
        <div className="slider"></div>
      </label>
      <select
        onChange={evt => handleChange(evt)}
        defaultValue={shipmentData.orderByItem}
      >
        <option value="name">name</option>
        <option value="id">id</option>
      </select>
    </div>
  );
};

export default SelectComponent;
