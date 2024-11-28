import { Card, CardContent, Typography } from "@mui/material";
import { DateField, FieldProps, FileField, useFieldValue } from "react-admin";

export const CustomFileField = (props: FieldProps) => {
  const value = useFieldValue(props);

  return (
    <>
      {value?.map((item: CustomFileFieldProp, index: number) => (
        <>
          <Card sx={{ maxWidth: 345 }} key={index}>
            <FileField
              source="attachment"
              src="src"
              title="title"
              rel="noopener noreferrer"
              emptyText="ra.page.not_found"
            />
            <CardContent>
              {item.createdate && item.createdate != "null" ? (
                <DateField
                  source={`attachment[${index}].createdate`}
                  locales="uk"
                  showTime
                  transform={(value) => new Date(value.replace(/at(?!\w)/, ""))}
                />
              ) : null}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.location}
              </Typography>
            </CardContent>
          </Card>
        </>
      ))}
    </>
  );
};

export interface CustomFileFieldProp {
  src: string;
  createdate: string;
  title: string;
  location: string;
}
