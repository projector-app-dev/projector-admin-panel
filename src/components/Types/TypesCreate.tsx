import {
  Create,
  CreateProps,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const TypesCreate = (props: CreateProps) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm>
        <TextInput source="title" fullWidth={true} />
        <NumberInput source="order" validate={required()} />
      </SimpleForm>
    </Create>
  );
};
