import { EditButton, List, ListProps, SimpleList } from "react-admin";

export const LinkList = (props:ListProps) => {
  return (
    <List {...props}>
      <SimpleList primaryText={record => record.name + ' ' + record.link}>
        <>
          <EditButton />
        </>
      </SimpleList>
    </List>
  );
};
