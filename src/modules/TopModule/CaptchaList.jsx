import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import styled from 'styled-components';
import Images from './ImageList';
import Timer from './timer';
import { deviceType } from '../../helpers';

export default function CaptchaList() {
  const device = deviceType();
  const isMobile = device === 'mobile';
  return (
    <>
      <CustomImageList cols={4} rowHeight={66} gap={10}>
        { Images.map((item, index) => (
          <ImageListItem
            key={index}
          >
            <img
              src={item}
              loading="lazy"
              alt=""
            />
          </ImageListItem>
        ))}
      </CustomImageList>
      {!isMobile && <Timer />}
    </>
  );
}

const CustomImageList = styled(ImageList)`
  width: 750px;
  height: auto;

  .MuiImageListItem-img {
    object-fit: fill !important;
  }
`;
