import {
  Edit,
  EditProps,
  ImageField,
  ImageInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";
import { CustomRichTextInput } from "../common/richText/RichText";
import { validateNewsFields } from "../common/validation/newsField";

const EditToolbar = () => (
  <Toolbar>
    <SaveButton />
  </Toolbar>
);

export const NewsEdit = (props: EditProps) => {
  return (
    <Edit {...props} redirect="list" mutationMode={"pessimistic"}>
      <SimpleForm validate={validateNewsFields} toolbar={<EditToolbar/>}>
        <TextInput source="header" />
        <CustomRichTextInput source="body" fullWidth={true} />
        <ImageInput source="picture">
          <ImageField source="src" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
