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
  SimpleList,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  EditButton,
  DeleteButton,
  required,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";

export const SalesList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => (
            <ReferenceField
              source="clientId"
              reference="client"
              record={record}
            >
              <TextField source="name" />
            </ReferenceField>
          )}
          secondaryText={(record) => `U$ ${record.value}`}
          tertiaryText={(record) => (
            <ReferenceField
              source="paymentId"
              reference="payment"
              link={false}
              record={record}
            >
              <TextField source="type" />
            </ReferenceField>
          )}
        />
      ) : (
        <Datagrid>
          <ReferenceField source="clientId" reference="client">
            <TextField source="name" />
          </ReferenceField>
          <NumberField
            source="value"
            options={{ style: "currency", currency: "USD" }}
          />
          <DateField source="date" />
          <ReferenceField source="paymentId" reference="payment" link={false}>
            <TextField source="type" />
          </ReferenceField>
          <EditButton basePath="/sales" />
          <DeleteButton basePath="/sales" />
        </Datagrid>
      )}
    </List>
  );
};

export const SalesCreate = (props) => {
  return (
    <Create title="Register new sale" {...props}>
      <SimpleForm redirect="/sales">
        <ReferenceInput
          source="clientId"
          reference="client"
          validate={required()}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInput
          source="value"
          validate={required()}
          // options={{ style: "currency", currency: "BRL" }}
        />
        <DateInput source="date" validate={required()} />
        <ReferenceInput
          source="paymentId"
          reference="payment"
          validate={required()}
        >
          <SelectInput optionText="type" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const SalesEdit = (props) => {
  return (
    <Edit title="Edit sale" {...props}>
      <SimpleForm redirect="/sales">
        <ReferenceInput
          source="clientId"
          reference="client"
          validate={required()}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInput
          source="value"
          validate={required()}
          // options={{ style: "currency", currency: "BRL" }}
        />
        <DateInput source="date" validate={required()} />
        <ReferenceInput
          source="paymentId"
          reference="payment"
          validate={required()}
        >
          <SelectInput optionText="type" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
