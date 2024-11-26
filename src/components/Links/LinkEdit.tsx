import {
  Edit,
  EditProps,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";

const EditToolbar = () => (
  <Toolbar>
    <SaveButton alwaysEnable />
  </Toolbar>
);

export const LinkEdit = (props: EditProps) => {
  return (
    <Edit {...props} redirect="list">
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="name" fullWidth={true} readOnly={true} />
        <TextInput source="link" fullWidth={true} />
      </SimpleForm>
    </Edit>
  );
};
