import { Create, CreateProps, SimpleForm, TextInput } from "react-admin";
import { CustomRichTextInput } from "../common/richText/RichText";

export const FaqCreate = (props: CreateProps) => {
  return (
    <Create redirect="list" {...props}>
      <SimpleForm>
        <TextInput source="header" />
        <CustomRichTextInput source="body" fullWidth={true} />
      </SimpleForm>
    </Create>
  );
};
