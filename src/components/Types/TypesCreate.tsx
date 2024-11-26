import {
  Create,
  CreateProps,
  SimpleForm,
  TextInput,
} from "react-admin";

export const TypesCreate = (props: CreateProps) => {
  return (
    <Create {...props} redirect="list">
      <SimpleForm >
        <TextInput source="title" fullWidth={true} />
      </SimpleForm>
    </Create>
  );
};
