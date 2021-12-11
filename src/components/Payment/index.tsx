import React, { FC } from "react";
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
  required,
  ListProps,
  EditProps,
  CreateProps,
} from "react-admin";

export const PaymentList: FC<ListProps> = (props) => {
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

export const PaymentCreate: FC<CreateProps> = (props) => {
  return (
    <Create title="Register new payment method" {...props}>
      <SimpleForm redirect="/payment">
        <TextInput source="type" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export const PaymentEdit: FC<EditProps> = (props) => {
  return (
    <Edit title="Edit payment method" {...props}>
      <SimpleForm redirect="/payment">
        <TextInput source="type" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
