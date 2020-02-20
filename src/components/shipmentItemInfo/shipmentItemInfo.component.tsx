import React from "react";
import { ShipmentContext } from "./../../store/shipmentContext";
import "./shipmentItemInfo.styles.scss";
import { Link } from "react-router-dom";

const ShipmentItemInfo: React.FC<any> = props => {
  const [, dispatch]: any = React.useContext(ShipmentContext);
  const [item, setItem] = React.useState(props.data);

  const handleChange = (event: any) => {
    item[event.target.name] = event.target.value;
    setItem({ ...item });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_SHIPMENT", payload: item });
    alert("Shipment Updated");
  };

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)} className="shipment-form">
        <div className="form-group">
          <label className="form-label">Id: </label>
          <input
            type="text"
            name="id"
            value={item.id}
            className="form-input"
            onChange={event => handleChange(event)}
            disabled
          />
        </div>
        <div className="form-group">
          <label className="form-label">Name: </label>
          <input
            type="text"
            name="name"
            value={item.name}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Mode:</label>
          <input
            type="text"
            name="mode"
            value={item.mode}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Type:</label>
          <input
            type="text"
            name="type"
            value={item.type}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Destination:</label>
          <input
            type="text"
            name="destination"
            value={item.destination}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Origin:</label>
          <input
            type="text"
            name="origin"
            value={item.origin}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Status:</label>
          <input
            type="text"
            name="status"
            value={item.status}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">UserId:</label>
          <input
            type="text"
            name="userId"
            value={item.userId}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Total:</label>
          <input
            type="text"
            name="total"
            value={item.total}
            className="form-input"
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Cargo:</label>
          {item.cargo.map(
            (
              el: {
                type: React.ReactNode;
                description: React.ReactNode;
                volume: React.ReactNode;
              },
              index: any
            ) => {
              return (
                <ul
                  className="form-input"
                  key={item.id + el.description + index}
                >
                  <select disabled>
                    <option>{el.type}</option>
                    <option>{el.description}</option>
                    <option>{`${el.volume}m`}</option>
                  </select>
                </ul>
              );
            }
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Services:</label>
          {item.services.map(
            (
              el: { type: React.ReactNode; value: React.ReactNode },
              index: any
            ) => {
              return (
                <ul className="form-input" key={item.id + el.value + index}>
                  <select disabled>
                    <option>{el.type}</option>
                    <option>{el.value}</option>
                  </select>
                </ul>
              );
            }
          )}
        </div>
        <input className="submit-button" type="submit" value="Submit" />
        <Link to="/">Home</Link>
      </form>
    </div>
  );
};

export default ShipmentItemInfo;
