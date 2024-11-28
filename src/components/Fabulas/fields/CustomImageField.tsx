import { useState } from "react";
import { DateField, FieldProps, useFieldValue, useTranslate } from "react-admin";
import FsLightbox from "fslightbox-react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const CustomImageField = (props: FieldProps) => {
  const value = useFieldValue(props);
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = value?.map((item: CustomPictureProp) => item.src);
  return (
    <>
      {value?.map((item: CustomPictureProp, index: number) => (
        <>
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea
              onClick={() => {
                setImageIndex(index);
                setToggler(!toggler);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.src}
                alt={item.title}
              />
              <CardContent>
                {item.createdate && item.createdate != "null" ? (
                  <DateField
                    source={`picture[${index}].createdate`}
                    locales="uk"
                    showTime
                    transform={(value) =>
                      new Date(value.replace(/at(?!\w)/, ""))
                    }
                  />
                ) : null}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.location}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </>
      ))}
      <FsLightbox
        toggler={toggler}
        type="image"
        sources={images}
        key={imageIndex}
      />
    </>
  );
};

export interface CustomPictureProp {
  src: string;
  createdate: string;
  title: string;
  location: string;
}
