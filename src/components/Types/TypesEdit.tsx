import {
  DeleteWithConfirmButton,
  Edit,
  EditProps,
  NumberInput,
  required,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";

const EditToolbar = () => (
  <Toolbar sx={{ justifyContent: "space-between" }}>
    <SaveButton alwaysEnable />
    <DeleteWithConfirmButton />
  </Toolbar>
);

export const TypesEdit = (props: EditProps) => {
  return (
    <Edit {...props} redirect="list">
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="title" fullWidth={true} />
        <NumberInput source="order" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
