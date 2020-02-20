import React from "react";
import { ShipmentContext } from "./../../store/shipmentContext";
import "./pagination.styles.scss";

const Pagination: React.FC<any> = () => {
  const [shipmentData, dispatch]: any = React.useContext(ShipmentContext);

  React.useEffect(() => {
  }, [shipmentData.pagination_details]);

  const handlePageChange = (pageOrder: any) => {
    if (pageOrder === "prev") {
      if (shipmentData.pagination_details.pre_page !== null) {
        dispatch({
          type: "CHANGE_PAGE",
          payload: { pageChange: shipmentData.pagination_details.page - 1 }
        });
      }
    }
    if (pageOrder === "next") {
      if (shipmentData.pagination_details.next_page !== null) {
        dispatch({
          type: "CHANGE_PAGE",
          payload: { pageChange: shipmentData.pagination_details.page + 1 }
        });
      }
    }
  };

  return (
    <React.Fragment>
      <div className="page-style">
        <button
          className="button-style"
          onClick={() => handlePageChange("prev")}
        >
          prev
        </button>
        {shipmentData.pagination_details.pre_page != null ? (
          <span className="prev-page">
            {shipmentData.pagination_details.pre_page}
          </span>
        ) : (
          ""
        )}
        {shipmentData.pagination_details.page != null ? (
          <span className="current-page">
            {shipmentData.pagination_details.page}
          </span>
        ) : (
          ""
        )}
        {shipmentData.pagination_details.next_page != null ? (
          <span className="next-page">
            {shipmentData.pagination_details.next_page}
          </span>
        ) : (
          ""
        )}
        <button
          className="button-style"
          onClick={() => handlePageChange("next")}
        >
          next
        </button>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
