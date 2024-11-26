import { Box, SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  EmailField,
  FileField,
  ImageField,
  ReferenceField,
  ShowBase,
  ShowProps,
  SimpleShowLayout,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";

export const FabulasShow = (props: ShowProps) => {
  const boxStyle: SxProps = {
    boxShadow: 1,
    padding: 2,
    marginTop: 2,
    marginLeft: 1,
    borderRadius: 1,
    bgcolor: (theme: Theme) =>
      `${theme.palette.mode === "dark" ? "#121212" : "#fff"}`,
  };

  return (
    <ShowBase {...props}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Box sx={boxStyle}>
            <SimpleShowLayout>
              <ReferenceField reference="users" source="userId">
                <TextField source="name" />
              </ReferenceField>
              <ReferenceField
                reference="users"
                source="userId"
                label="resources.users.fields.email"
              >
                <EmailField source="email" />
              </ReferenceField>
              <ReferenceField
                reference="users"
                source="userId"
                label="resources.users.fields.phone"
              >
                <TextField source="phone" />
              </ReferenceField>
            </SimpleShowLayout>
          </Box>
        </Grid>
        <Grid size="grow">
          <Box sx={boxStyle}>
            <TabbedShowLayout>
              <Tab label="resources.fabulas.fields.description">
                <TextField source="description" label={false} />
              </Tab>
              <Tab label="resources.fabulas.fields.media">
                <TextField source="location" emptyText="ra.page.not_found" />
                <ImageField
                  source="picture"
                  src="src"
                  title="title"
                  emptyText="ra.page.not_found"
                />
                <FileField
                  source="attachment"
                  src="src"
                  title="title"
                  rel="noopener noreferrer"
                  emptyText="ra.page.not_found"
                />
              </Tab>
            </TabbedShowLayout>
          </Box>
        </Grid>
      </Grid>
    </ShowBase>
  );
};
