import { Box, SxProps, Theme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  EmailField,
  ReferenceField,
  ShowBase,
  ShowProps,
  SimpleShowLayout,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import { CustomImageField } from "./fields/CustomImageField";
import { CustomFileField } from "./fields/CustomFileField";

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
          <Box sx={boxStyle} >
            <TabbedShowLayout>
              <Tab label="resources.fabulas.fields.description">
                <TextField source="description" label={false} />
              </Tab>
              <Tab label="resources.fabulas.fields.media" >
                <CustomImageField source="picture" />
                <CustomFileField source="attachment" />
              </Tab>
            </TabbedShowLayout>
          </Box>
        </Grid>
      </Grid>
    </ShowBase>
  );
};
