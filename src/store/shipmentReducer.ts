import { Paginator } from "./../utils/helper";

let GLOBAL_INITIAL_STATE: any;

const INITIAL_STATE = {
  lastSearchValue: "",
  pagination_details: {},
  page: 1,
  pageSize: 20,
  orderBy: "ASC",
  orderByItem: "name",
  shipments: [
    {
      id: "S1000",
      name: "T-shirts(Summer2018) from Shanghai to Hamburg",
      cargo: [
        {
          type: "Fabric",
          description: "1000 Blue T-shirts",
          volume: "2"
        },
        {
          type: "Fabric",
          description: "2000 Green T-shirts",
          volume: "3"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Saarbrücker Str. 38, 10405 Berlin",
      origin: "Shanghai Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "1000",
      status: "ACTIVE",
      userId: "U1000"
    },
    {
      id: "S1001",
      name: "New spring collection(2018)",
      cargo: [
        {
          type: "Furniture",
          description: "300 Tables",
          volume: "20"
        },
        {
          type: "Furniture",
          description: "1500 Chairs",
          volume: "15"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Saarbrücker Str. 38, 10405 Berlin",
      origin: "Ningbo port",
      services: [
        {
          type: "customs"
        },
        {
          type: "insurance",
          value: "100"
        }
      ],
      total: "3000",
      status: "ACTIVE",
      userId: "U1002"
    },
    {
      id: "S1002",
      name: "PO89634, PO27X",
      cargo: [
        {
          type: "Bikes model 27X",
          description: "100 Bikes model 27X",
          volume: "100"
        }
      ],
      mode: "air",
      type: "LCL",
      destination: "Saarbrücker Str. 38, 10405 Berlin",
      origin: "Shanghai Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "10000",
      status: "COMPLETED",
      userId: "U1001"
    },
    {
      id: "S1003",
      name: "New Furnitures from Shengen(2018)",
      cargo: [
        {
          type: "Couch22 White",
          description: "103 Couch model Couch22",
          volume: "103"
        }
      ],
      mode: "sea",
      type: "LCL",
      destination: "Mullerstr 6, 13353 Berlin",
      origin: "Shengen Port",
      services: [
        {
          type: "insurance"
        }
      ],
      total: "10000",
      status: "COMPLETED",
      userId: "U5312"
    },
    {
      id: "S1004",
      name: "New Furnitures from Shengen",
      cargo: [
        {
          type: "Couch22 White",
          description: "103 Couch model Couch22",
          volume: "103"
        }
      ],
      mode: "air",
      type: "LCL",
      destination: "Mullerstr 6, 13353 Berlin",
      origin: "Shengen Port",
      services: [
        {
          type: "insurance"
        }
      ],
      total: "10000",
      status: "NEW",
      userId: "U5312"
    },
    {
      id: "S1005",
      name: "New Furnitures From Chittagong",
      cargo: [
        {
          type: "Couch22 White",
          description: "103 Couch model Couch22",
          volume: "103"
        },
        {
          type: "Couch22 Black",
          description: "103 Couch model Couch22",
          volume: "103"
        }
      ],
      mode: "air",
      type: "FCL",
      destination: "Mullerstr 6, 13353 Berlin",
      origin: "Chittagong Port",
      services: [
        {
          type: "insurance"
        }
      ],
      total: "1000",
      status: "NEW",
      userId: "U5312"
    },
    {
      id: "S1006",
      name: "Vacuum Cleaners",
      cargo: [
        {
          type: "TVAC515",
          description: "555 TVAC515 120V",
          volume: "555"
        },
        {
          type: "Couch22 Black",
          description: "555 TVAC515 240V",
          volume: "555"
        }
      ],
      mode: "air",
      type: "FCL",
      destination: "Tughlakabad Port",
      origin: "Hamburg Port",
      services: [
        {
          type: "insurance"
        },
        {
          type: "customs"
        }
      ],
      total: "100000",
      status: "ACTIVE",
      userId: "U531221"
    },
    {
      id: "S1007",
      name: "Mattress",
      cargo: [
        {
          type: "MAT128",
          description: "MAT12ftx82ft",
          volume: "666"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Shengen Port",
      origin: "Bremerhaven Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "101010",
      status: "ACTIVE",
      userId: "U531222"
    },
    {
      id: "S1008",
      name: "Scooters",
      cargo: [
        {
          type: "Gororo",
          description: "Gororo Type B",
          volume: "150"
        }
      ],
      mode: "air",
      type: "FCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "60120120",
      status: "COMPLETED",
      userId: "U1337"
    },
    {
      id: "S1009",
      name: "Helmets",
      cargo: [
        {
          type: "HelmGoro",
          description: "HelmGoro Red",
          volume: "150"
        }
      ],
      mode: "air",
      type: "LCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "60120120",
      status: "COMPLETED",
      userId: "U1337"
    },
    {
      id: "S1010",
      name: "Neukrit 5a Cable",
      cargo: [
        {
          type: "Neukrit5a",
          description: "Cable with phantom support",
          volume: "80"
        }
      ],
      mode: "air",
      type: "LCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "420420",
      status: "ACTIVE",
      userId: "U0002"
    },
    {
      id: "S1011",
      name: "Neukrit Phantom3",
      cargo: [
        {
          type: "NeukritPh3",
          description: "Phantom Plug Gold Plated",
          volume: "100"
        }
      ],
      mode: "sea",
      type: "LCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "420420",
      status: "ACTIVE",
      userId: "U0002"
    },
    {
      id: "S1012",
      name: "T-shirts(Spring 2018) from Shanghai to Hamburg",
      cargo: [
        {
          type: "Fabric",
          description: "1000 Blue T-shirts",
          volume: "2"
        },
        {
          type: "Fabric",
          description: "2000 Green T-shirts",
          volume: "3"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Saarbrücker Str. 38, 10405 Berlin",
      origin: "Shanghai Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "1000",
      status: "COMPLETED",
      userId: "U1000"
    },
    {
      id: "S1013",
      name: "New spring furniture collection(2018)",
      cargo: [
        {
          type: "Furniture",
          description: "300 Tables",
          volume: "20"
        },
        {
          type: "Furniture",
          description: "1500 Chairs",
          volume: "15"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Saarbrücker Str. 38, 10405 Berlin",
      origin: "Ningbo port",
      services: [
        {
          type: "customs"
        },
        {
          type: "insurance",
          value: "100"
        }
      ],
      total: "3000",
      status: "COMPLETED",
      userId: "U1002"
    },
    {
      id: "S1014",
      name: "New Furnitures from Shengen(Rosewood)",
      cargo: [
        {
          type: "Couch22 White",
          description: "103 Couch model Couch22",
          volume: "103"
        }
      ],
      mode: "air",
      type: "LCL",
      destination: "Mullerstr 6, 13353 Berlin",
      origin: "Shengen Port",
      services: [
        {
          type: "insurance"
        }
      ],
      total: "10000",
      status: "COMPLETED",
      userId: "U5312"
    },
    {
      id: "S1015",
      name: "New Furnitures From Chittagong(Sisou)",
      cargo: [
        {
          type: "Couch22 White",
          description: "103 Couch model Couch22",
          volume: "103"
        },
        {
          type: "Couch22 Black",
          description: "103 Couch model Couch22",
          volume: "103"
        }
      ],
      mode: "air",
      type: "FCL",
      destination: "Mullerstr 6, 13353 Berlin",
      origin: "Chittagong Port",
      services: [
        {
          type: "insurance"
        }
      ],
      total: "1000",
      status: "NEW",
      userId: "U5312"
    },
    {
      id: "S1016",
      name: "Vacuum Cleaners",
      cargo: [
        {
          type: "TVAC515",
          description: "555 TVAC515 120V",
          volume: "555"
        },
        {
          type: "Couch22 Black",
          description: "555 TVAC515 240V",
          volume: "555"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Tughlakabad Port",
      origin: "Hamburg Port",
      services: [
        {
          type: "insurance"
        },
        {
          type: "customs"
        }
      ],
      total: "100000",
      status: "COMPLETED",
      userId: "U531221"
    },
    {
      id: "S1017",
      name: "Mattress(Medium)",
      cargo: [
        {
          type: "MAT128",
          description: "MAT12ftx82ft",
          volume: "666"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Shengen Port",
      origin: "Bremerhaven Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "101010",
      status: "ACTIVE",
      userId: "U531222"
    },
    {
      id: "S1018",
      name: "Scooters Blue/Green",
      cargo: [
        {
          type: "Gororo",
          description: "Gororo Type B",
          volume: "150"
        }
      ],
      mode: "air",
      type: "FCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "60120120",
      status: "COMPLETED",
      userId: "U1337"
    },
    {
      id: "S1019",
      name: "Helmets(Round)",
      cargo: [
        {
          type: "HelmGoro",
          description: "HelmGoro Red",
          volume: "150"
        }
      ],
      mode: "air",
      type: "LCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "60120120",
      status: "COMPLETED",
      userId: "U1337"
    },
    {
      id: "S1020",
      name: "Neukrit 5a Cable",
      cargo: [
        {
          type: "Neukrit5a",
          description: "Cable with phantom support",
          volume: "80"
        }
      ],
      mode: "air",
      type: "LCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "420420",
      status: "ACTIVE",
      userId: "U0002"
    },
    {
      id: "S1021",
      name: "Neukrit Phantom3",
      cargo: [
        {
          type: "NeukritPh3",
          description: "Phantom Plug Gold Plated",
          volume: "100"
        }
      ],
      mode: "sea",
      type: "LCL",
      destination: "Rotterdam Port",
      origin: "Xianbou Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "420420",
      status: "ACTIVE",
      userId: "U0002"
    },
    {
      id: "S1022",
      name: "T-shirts(Spring 2019) from Shanghai to Hamburg",
      cargo: [
        {
          type: "Fabric",
          description: "1000 Blue T-shirts",
          volume: "2"
        },
        {
          type: "Fabric",
          description: "2000 Green T-shirts",
          volume: "3"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Saarbrücker Str. 38, 10405 Berlin",
      origin: "Shanghai Port",
      services: [
        {
          type: "customs"
        }
      ],
      total: "1000",
      status: "ACTIVE",
      userId: "U1000"
    },
    {
      id: "S1023",
      name: "New spring collection(2019)",
      cargo: [
        {
          type: "Furniture",
          description: "300 Tables",
          volume: "20"
        },
        {
          type: "Furniture",
          description: "1500 Chairs",
          volume: "15"
        }
      ],
      mode: "sea",
      type: "FCL",
      destination: "Saarbrücker Str. 38, 10405 Berlin",
      origin: "Ningbo port",
      services: [
        {
          type: "customs"
        },
        {
          type: "insurance",
          value: "100"
        }
      ],
      total: "3000",
      status: "ACTIVE",
      userId: "U1002"
    }
  ]
};

function changeOrder(shipments: any, item: string, order: string) {
  if (order === "ASC") {
    return shipments.sort(function(a: any, b: any) {
      if (a[item].toUpperCase() < b[item].toUpperCase()) {
        return -1;
      }
    });
  }
  if (order === "DES") {
    return shipments.sort(function(a: any, b: any) {
      if (a[item].toUpperCase() > b[item].toUpperCase()) {
        return -1;
      }
    });
  }
}

function searchById(shipments: any, searchId: string) {
  return shipments.filter((a: any) => {
    if (a["id"].toLowerCase().includes(searchId.toLowerCase())) {
      return a;
    }
  });
}

function getStateFromLocalStorage() {
  //localStorage.clear();

  if (!localStorage.getItem("shipmentData")) {
    GLOBAL_INITIAL_STATE = INITIAL_STATE;
  } else {
    GLOBAL_INITIAL_STATE = localStorage.getItem("shipmentData");
    GLOBAL_INITIAL_STATE = JSON.parse(GLOBAL_INITIAL_STATE);
  }
  const items = Paginator(
    GLOBAL_INITIAL_STATE.shipments,
    GLOBAL_INITIAL_STATE.page,
    GLOBAL_INITIAL_STATE.pageSize
  );

  GLOBAL_INITIAL_STATE.pagination_details = items;
}

getStateFromLocalStorage();
export { GLOBAL_INITIAL_STATE };

export const ShipmentReducer = (state = GLOBAL_INITIAL_STATE, action: any) => {
  let newShipments = state.pagination_details.shippedData;
  switch (action.type) {
    case "CHANGE_PAGE":

      let items = Paginator(
        INITIAL_STATE.shipments,
        action.payload.pageChange,
        state.pageSize
      );
      return {
        ...state,
        pagination_details: items
      };
    case "UPDATE_SHIPMENT":
      let updatedState = state.shipments.map((shipment: { id: any }) => {
        if (shipment.id === action.payload.id) {
          return action.payload;
        } else {
          return shipment;
        }
      });

      localStorage.setItem(
        "shipmentData",
        JSON.stringify({ ...state, shipments: updatedState })
      );

      // const newUpdatedState = updatedState;

      const new_paginationDetails = Paginator(
        updatedState,
        GLOBAL_INITIAL_STATE.page,
        GLOBAL_INITIAL_STATE.pageSize
      );
      return {
        ...state,
        shipments: updatedState,
        pagination_details: new_paginationDetails
      };
    case "SEARCH":
      if (action.payload.length <= state.lastSearchValue.length) {
        newShipments = searchById(
          GLOBAL_INITIAL_STATE.pagination_details.shippedData,
          action.payload
        );
      } else {
        newShipments = searchById(newShipments, action.payload);
      }
      return {
        ...state,
        pagination_details: {
          ...state.pagination_details,
          shippedData: newShipments
        },
        lastSearchValue: action.payload
      };
    case "ORDERBYITEM":
      newShipments = changeOrder(newShipments, action.payload, state.orderBy);
      return {
        ...state,
        pagination_details: {
          ...state.pagination_details,
          shippedData: newShipments
        },
        orderByItem: action.payload
      };
    case "ORDERBY":
      newShipments = changeOrder(
        newShipments,
        state.orderByItem,
        action.payload
      );
      return {
        ...state,
        pagination_details: {
          ...state.pagination_details,
          shippedData: newShipments
        },
        orderBy: action.payload
      };
    default:
      return state;
  }
};
