import React from "react";
import { ShipmentContext } from "./../../store/shipmentContext";
import "./shipmentItemDetail.styles.scss";
import ShipmentItemInfo from "./../shipmentItemInfo/shipmentItemInfo.component";

const ShipmentItemDetail: React.FC<any> = (props: any) => {
  const [shipmentData]: any = React.useContext(ShipmentContext);

  const shipmentId = props.match.params.shipmentId;

  const item = shipmentData.shipments.filter(
    (shipmentItem: any) => shipmentItem.id === shipmentId
  );

  return (
    <React.Fragment>
      <ShipmentItemInfo data={item[0]} />
    </React.Fragment>
  );
};

export default ShipmentItemDetail;
