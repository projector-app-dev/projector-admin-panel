import {
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  List,
  ListProps,
  TextField,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);

export const FaqList = (props: ListProps) => {
  return (
    <List actions={<ListActions />} {...props}>
      <Datagrid>
        <TextField source="header" />
        <DateField source="createdate" locales="uk" />
        <DateField source="lastupdate" locales="uk" />
        <>
          <EditButton />
        </>
      </Datagrid>
    </List>
  );
};
