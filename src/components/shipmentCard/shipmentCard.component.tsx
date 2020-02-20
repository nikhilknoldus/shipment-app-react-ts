import * as React from "react";
import { Link } from "react-router-dom";

import { IShipmentCardProps } from "./shipmentCard.interface";
import "./shipmentCard.styles.scss";

const ShipmentCard: React.FC<IShipmentCardProps> = props => {
  const getShipmentName = (shipmentName: string) => {
    if (shipmentName.length < 18) {
      return shipmentName;
    }
    return `${shipmentName.slice(0, 18)}...`;
  };

  return (
    <div className="shipment-card-container">
      <div className="shipment-card-content">
        <h3 className="shipment-card-content__shipment-name" title={props.name}>
          {getShipmentName(props.name)}
        </h3>
        <p className="shipment-card-content__shipment-origin">{props.origin}</p>
        <p className="shipment-card-content__shipment-info">
          Shipment id:{" "}
          <span className="shipment-card-content__shipment-info-value">
            {props.id}
          </span>
        </p>
        <p className="shipment-card-content__shipment-info">
          Number of cargo items:{" "}
          <span className="shipment-card-content__shipment-info-value">
            {props.cargoLength}
          </span>
        </p>
        <p className="shipment-card-content__shipment-info">
          Total:{" "}
          <span className="shipment-card-content__shipment-info-value">
            {props.total}
          </span>
        </p>
        <Link className="view-link" to={`/shipments/${props.id}`}>View shipment</Link>
      </div>
    </div>
  );
};

export default ShipmentCard;
