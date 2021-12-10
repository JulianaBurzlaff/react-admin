import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  List,
  Datagrid,
  SimpleList,
  TextField,
  EmailField,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  required,
  number,
  regex,
  email,
} from "react-admin";
import MyUrlField from "../MyUrlField";
import { useMediaQuery } from "@material-ui/core";

const validateRequired = required();
const validateEmail = [required(), email()];
const validateNumber = [required(), number()];
const validateZipCode = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];

const clientFilter = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="id" label="Client" reference="client" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const ClientList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={clientFilter} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.phone}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <MyUrlField source="website" />
        </Datagrid>
      )}
    </List>
  );
};

export const ClientCreate = (props) => (
  <Create title="Regiter new client" {...props}>
    <SimpleForm redirect="/client">
      <TextInput label="Name" source="name" validate={validateRequired} />
      <TextInput
        label="Username"
        source="username"
        validate={validateRequired}
      />
      <TextInput
        label="Email Address"
        source="email"
        validate={validateEmail}
      />
      <TextInput
        label="Zipcode"
        source="address.zipcode"
        validate={validateZipCode}
      />
      <TextInput
        label="Street"
        source="address.street"
        validate={validateRequired}
      />
      <TextInput
        label="Suite"
        source="address.suite"
        validate={validateRequired}
      />
      <TextInput
        label="City"
        source="address.city"
        validate={validateRequired}
      />
      <NumberInput
        label="Latitude"
        source="address.geo.lat"
        validate={validateNumber}
      />
      <NumberInput
        label="Longitude"
        source="address.geo.lng"
        validate={validateNumber}
      />
      <TextInput label="Phone" source="phone" validate={validateRequired} />
      <TextInput label="Website" source="website" validate={validateRequired} />
    </SimpleForm>
  </Create>
);

const EditTitle = ({ record }) => {
  return <span>Edit client {record ? `"${record.name}"` : ""}</span>;
};

export const ClientEdit = (props) => (
  <Edit title={<EditTitle />} {...props}>
    <SimpleForm redirect="/client">
      <TextInput label="Name" source="name" validate={validateRequired} />
      <TextInput
        label="Username"
        source="username"
        validate={validateRequired}
      />
      <TextInput
        label="Email Address"
        source="email"
        validate={validateEmail}
      />
      <TextInput
        label="Zipcode"
        source="address.zipcode"
        validate={validateZipCode}
      />
      <TextInput
        label="Street"
        source="address.street"
        validate={validateRequired}
      />
      <TextInput
        label="Suite"
        source="address.suite"
        validate={validateRequired}
      />
      <TextInput
        label="City"
        source="address.city"
        validate={validateRequired}
      />
      <NumberInput
        label="Latitude"
        source="address.geo.lat"
        validate={validateNumber}
      />
      <NumberInput
        label="Longitude"
        source="address.geo.lng"
        validate={validateNumber}
      />
      <TextInput label="Phone" source="phone" validate={validateRequired} />
      <TextInput label="Website" source="website" validate={validateRequired} />
    </SimpleForm>
  </Edit>
);
