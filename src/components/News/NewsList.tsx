import {
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  ImageField,
  List,
  ListProps,
  TextField,
  TopToolbar,
} from "react-admin";
import { BulkDeleteButton } from "../common/buttons/BulkDeleteButton";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const NewsList = (props: ListProps) => {
  return (
    <List actions={<ListActions />} {...props}>
      <Datagrid
        bulkActionButtons={<BulkDeleteButton mutationMode={"pessimistic"} />}
      >
        <TextField source="header" />
        <ImageField source="picture.src" label="resources.news.fields.picture"/>
        <DateField source="createdate" locales="uk" />
        <DateField source="lastupdate" locales="uk" />
        <>
          <EditButton />
        </>
      </Datagrid>
    </List>
  );
};
