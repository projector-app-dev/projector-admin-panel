import { Create, CreateProps, NumberInput, required, SimpleForm, TextInput } from "react-admin";
import { CustomRichTextInput } from "../common/richText/RichText";

export const FaqCreate = (props: CreateProps) => {
  return (
    <Create redirect="list" {...props}>
      <SimpleForm>
        <NumberInput source="order" validate={required()} />
        <TextInput source="header" />
        <CustomRichTextInput source="body" fullWidth={true} />
      </SimpleForm>
    </Create>
  );
};
