import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import imgHeart from './сердечко-700x525.jpg';

export default function Finish() {
  return (
    <>
      <Title variant="h3">Большое спасибо за помощь!</Title>
      <Typography variant="body1">На этом исследование окончено, вы великoleпны.</Typography>
      <img src={imgHeart} alt="" />
    </>
  );
}

const Title = styled(Typography)`
  padding: 32px 0;
`;
