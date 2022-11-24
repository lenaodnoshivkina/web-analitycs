import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

export default function CaptchaList() {
  const imgArray = [...Array(12).keys()];
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {imgArray.map((item) => (
        <ImageListItem key={item}>
          <img
            src=""
            loading="lazy"
            alt=""
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
