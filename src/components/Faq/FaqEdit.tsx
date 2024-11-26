import { Edit, EditProps, SimpleForm, TextInput } from "react-admin";
import { CustomRichTextInput } from "../common/richText/RichText";

export const FaqEdit = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="header" />
        <CustomRichTextInput source="body" fullWidth={true} />
      </SimpleForm>
    </Edit>
  );
};
