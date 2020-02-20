import React, { createContext, useReducer } from "react";
import { ShipmentProvider } from "./shipmentContext";
import { ShipmentReducer, GLOBAL_INITIAL_STATE } from "./shipmentReducer";

const Store: React.FC<any> = props => {
  const [shipmentData, dispatch]: any = React.useReducer(
    ShipmentReducer,
    GLOBAL_INITIAL_STATE
  );

  return (
    <ShipmentProvider value={[shipmentData, dispatch]}>
      {props.children}
    </ShipmentProvider>
  );
};

export default Store;
