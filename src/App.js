// Packages
import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

//Components
import { PaymentList, PaymentCreate, PaymentEdit } from "./components/Payment";
import { SalesList, SalesCreate, SalesEdit } from "./components/Sales";
import { ClientList, ClientCreate, ClientEdit } from "./components/_Clients";

//Icons
import UserIcon from "@material-ui/icons/Group";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payments";

// Configs
import Header from "./Header";
import authProvider from "./authProvider";

function App() {
  return (
    <Admin
      dashboard={Header}
      authProvider={authProvider}
      dataProvider={jsonServerProvider(
        "https://my-json-server.typicode.com/JulianaBurzlaff/data"
      )}
    >
      <Resource
        name="payment"
        list={PaymentList}
        create={PaymentCreate}
        edit={PaymentEdit}
        icon={PaymentsIcon}
      />
      <Resource
        name="sales"
        list={SalesList}
        create={SalesCreate}
        edit={SalesEdit}
        icon={ReceiptIcon}
      />
      <Resource
        name="client"
        list={ClientList}
        create={ClientCreate}
        edit={ClientEdit}
        icon={UserIcon}
      />
    </Admin>
  );
}

export default App;
