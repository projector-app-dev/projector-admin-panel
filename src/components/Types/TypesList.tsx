import {
  CreateButton,
  Datagrid,
  EditButton,
  List,
  ListProps,
  TextField,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <TopToolbar >
    <CreateButton />
  </TopToolbar>
);

export const TypesList = (props: ListProps) => {
  return (
    <List actions={<ListActions />} {...props}>
      <Datagrid bulkActionButtons={false} sx={{'& .RaDatagrid-rowCell:has(.edit-button)': {
        textAlign: "end"
      }}}>
        <TextField source="title" />
        <>
          <EditButton className="edit-button"/>
        </>
      </Datagrid>
    </List>
  );
};
