import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const SalesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField
          source="value"
          options={{ style: "currency", currency: "BRL" }}
        />
        <DateField source="date" />
        <ReferenceField source="paymentId" reference="payment" link={false}>
          <TextField source="type" />
        </ReferenceField>
        <EditButton basePath="/sales" />
        <DeleteButton basePath="/sales" />
      </Datagrid>
    </List>
  );
};

export const SalesCreate = (props) => {
  return (
    <Create title="Cadastrar nova venda" {...props}>
      <SimpleForm redirect="/sales">
        <NumberInput
          source="value"
          // options={{ style: "currency", currency: "BRL" }}
        />
        <DateInput source="date" />
        <ReferenceInput source="paymentId" reference="payment">
          <SelectInput optionText="type" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const SalesEdit = (props) => {
  return (
    <Edit title="Editar venda" {...props}>
      <SimpleForm redirect="/sales">
        <NumberInput
          source="value"
          // options={{ style: "currency", currency: "BRL" }}
        />
        <DateInput source="date" />
        <ReferenceInput source="paymentId" reference="payment">
          <SelectInput optionText="type" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
