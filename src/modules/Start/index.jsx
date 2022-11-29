import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';

export default function Start({ updateStage }) {
  return (
    <>
      <Title variant="h3">Привет!</Title>
      <Typography variant="body1">Спасибо, что согласились принять участие в исследовании.</Typography>
      <Typography variant="body1">По нажатию на кнопку Начать вы увидите список из нескольких капч.</Typography>
      <Typography variant="body1">Вам необходимо будет ввести их в соответствующие поля для ввода ЧЕРЕЗ ПРОБЕЛ как можно быстрее.</Typography>
      <Typography variant="body1">Для того чтобы завершить задание, нажмите на кнопку Отправить. </Typography>
      <Typography variant="body1">
        Если вы остались на странице с картинками, то где-то была допущена ошибка.
      </Typography>
      <Warning variant="body1">ВНИМАНИЕ: для прохождения эксперимента необходимо включить звук на устройстве.</Warning>
      <CustomButton variant="contained" color="success" onClick={updateStage}>Начать</CustomButton>
    </>
  );
}

const Title = styled(Typography)`
  padding: 32px 0;
`;
const Warning = styled(Typography)`
  padding: 8px 0;
  color: red;
`;

const CustomButton = styled(Button)`
  margin: 16px 0 !important;
`;
