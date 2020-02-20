import React from "react";

export interface ICargo {
  type: string;
  description: string;
  volume: string;
}

export interface IServices {
  type: string;
  value?: string;
}
export interface IShipmentInterface {
  id: number;
  name: string;
  cargo: [ICargo];
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: [IServices];
  total: string;
  status: string;
  userId: string;
}

export const ShipmentContext = React.createContext<IShipmentInterface | null>(
  null
);

export const ShipmentProvider: any = ShipmentContext.Provider;
export const ShipmentConsumer: any = ShipmentContext.Consumer;
