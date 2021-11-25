import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { PaymentList, PaymentCreate, PaymentEdit } from "./components/Payment";
import { SalesList, SalesCreate, SalesEdit } from "./components/Sales";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="payment"
        list={PaymentList}
        create={PaymentCreate}
        edit={PaymentEdit}
      />
      <Resource
        name="sales"
        list={SalesList}
        create={SalesCreate}
        edit={SalesEdit}
      />
    </Admin>
  );
}

export default App;
