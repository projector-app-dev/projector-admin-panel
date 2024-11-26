import {
  Datagrid,
  DateField,
  List,
  ListProps,
  ReferenceField,
  RichTextField,
  ShowButton,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { BulkDeleteButton } from "../common/buttons/BulkDeleteButton";
import { TypeField } from "./fields/TypeField";

const FabulasExpand = () => {
  return (
    <SimpleShowLayout>
      <RichTextField source="description" />
      <ShowButton />
    </SimpleShowLayout>
  );
};

export const FabulasList = (props: ListProps) => {
  return (
    <List actions={false} {...props} sx={{ paddingTop: 6 }}>
      <Datagrid
        bulkActionButtons={<BulkDeleteButton mutationMode={"pessimistic"} />}
        expand={<FabulasExpand />}
      >
        <TypeField source="type" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <DateField
          source="createdate"
          locales="uk"
          showTime
          transform={(value) => new Date(value.replace(/at(?!\w)/, ""))}
        />
      </Datagrid>
    </List>
  );
};
