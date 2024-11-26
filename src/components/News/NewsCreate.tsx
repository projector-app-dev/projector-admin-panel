import {
  Create,
  CreateProps,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { CustomRichTextInput } from "../common/richText/RichText";
import { validateNewsFields } from "../common/validation/newsField";

export const NewsCreate = (props: CreateProps) => {
  return (
    <Create redirect="list" {...props}>
      <SimpleForm validate={validateNewsFields}>
        <TextInput source="header" />
        <CustomRichTextInput source="body" fullWidth={true} />
        <ImageInput source="picture">
          <ImageField source="src" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};
