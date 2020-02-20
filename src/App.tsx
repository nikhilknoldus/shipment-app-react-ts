import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ShipmentProvider } from "./store/shipmentContext";
import { ShipmentReducer, GLOBAL_INITIAL_STATE } from "./store/shipmentReducer";
import ShipmentComponent from "./components/shipment/shipment.component";
import ShipmentItemDetail from "./components/shipmentItemDetail/shipmentItemDetail.component";
import "./App.css";
import ErrorBoundary from "./error-boundary/error-boundary";
import Page404 from "./page404/page404.page";

const App: React.FC = () => {
  const [shipmentData, dispatch]: any = React.useReducer(
    ShipmentReducer,
    GLOBAL_INITIAL_STATE
  );
  return (
    <ErrorBoundary>
    <ShipmentProvider value={[shipmentData, dispatch]}>
      <div className="App">
        <h1 className="heading">FreightHub shipments</h1>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={ShipmentComponent} />
            <Route
              exact={true}
              path="/shipments/:shipmentId"
              component={ShipmentItemDetail}
            />
            <Route component={Page404} />
          </Switch>
        </Router>
      </div>
    </ShipmentProvider>
    </ErrorBoundary>
  );
};

export default App;
