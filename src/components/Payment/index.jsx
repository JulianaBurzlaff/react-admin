import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PaymentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="type" />
        <EditButton basePath="/payment" />
        <DeleteButton basePath="/payment" />
      </Datagrid>
    </List>
  );
};

export const PaymentCreate = (props) => {
  return (
    <Create title="Cadastrar método de pagamento" {...props}>
      <SimpleForm redirect="/payment">
        <TextInput source="type" />
      </SimpleForm>
    </Create>
  );
};

export const PaymentEdit = (props) => {
  return (
    <Edit title="Editar método de pagamento" {...props}>
      <SimpleForm redirect="/payment">
        <TextInput source="type" />
      </SimpleForm>
    </Edit>
  );
};
