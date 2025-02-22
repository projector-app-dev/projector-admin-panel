import { Edit, EditProps, NumberInput, required, SimpleForm, TextInput } from "react-admin";
import { CustomRichTextInput } from "../common/richText/RichText";

export const FaqEdit = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput source="order" validate={required()} />
        <TextInput source="header" />
        <CustomRichTextInput source="body" fullWidth={true} />
      </SimpleForm>
    </Edit>
  );
};
