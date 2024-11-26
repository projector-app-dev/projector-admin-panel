import {
  Datagrid,
  DateField,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";

export const UsersList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="phone" />
        <ReferenceField source="sexTypeId" reference="sexTypes" link={false}>
          <TextField source="title" />
        </ReferenceField>
        <ReferenceField
          source="genderTypeId"
          reference="genderTypes"
          link={false}
        >
          <TextField source="title" />
        </ReferenceField>
        <DateField
          source="birthdate"
          locales="uk"
          transform={(value: string) =>
            new Date(value.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1"))
          }
        />
      </Datagrid>
    </List>
  );
};
