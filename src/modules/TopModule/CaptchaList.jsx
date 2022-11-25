import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import styled from 'styled-components';
import Images from './ImageList';

export default function CaptchaList() {
  return (
    <CustomImageList cols={4} rowHeight={66} gap={10}>
      { Images.map((item) => (
        <ImageListItem>
          <img
            src={item}
            loading="lazy"
            alt=""
          />
        </ImageListItem>
      ))}
    </CustomImageList>
  );
}

const CustomImageList = styled(ImageList)`
  width: 750px;
  height: auto;
`;
