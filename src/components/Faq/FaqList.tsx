import {
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  List,
  ListProps,
  NumberField,
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
        <NumberField source="order" />
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
