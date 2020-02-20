import React from "react";
import "./shipment.styles.scss";
import { ShipmentContext } from "./../../store/shipmentContext";
import ShipmentCard from "./../shipmentCard/shipmentCard.component";
import SelectComponent from "./../select/select.component";
import Pagination from "../pagination/pagination.component";

const ShipmentComponent: React.FC = () => {
  const [shipmentData, dispatch]: any = React.useContext(ShipmentContext);

  React.useEffect(() => {}, []);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SEARCH", payload: evt.target.value });
  };

  const renderShipments = () => {
    return (
      <div className="shipments-container">
        {shipmentData.pagination_details.shippedData.map((shipment: any) => {
          return (
            <ShipmentCard
              key={shipment.id}
              id={shipment.id}
              name={shipment.name}
              cargoLength={shipment.cargo.length}
              total={shipment.total}
              origin={shipment.origin}
            />
          );
        })}
      </div>
    );
  };

  return (
    <React.Fragment>
      <SelectComponent />
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Search by id"
        onChange={evt => handleInputChange(evt)}
      />
      {renderShipments()}
      <Pagination />
    </React.Fragment>
  );
};

export default ShipmentComponent;
