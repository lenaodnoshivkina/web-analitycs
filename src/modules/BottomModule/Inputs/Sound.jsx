import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import { TextField } from '@mui/material';
import boopSfx from '../../../sounds/boop.wav';

export default function SoundInput(props) {
  // eslint-disable-next-line react/prop-types
  const { rightArr } = props;
  // const [error, setError] = useState(false);
  const [play] = useSound(boopSfx);

  const validate = (inputArr) => {
    const validateArr = inputArr.filter((item, index) => item !== rightArr[index]);
    if (validateArr.length) {
      play();
    }
  };

  const onChangeInput = (e) => {
    if (e.target.value.slice(-1) === ' ' || e.target.value.length > 26) {
      const inputArr = e.target.value.split(' ');
      inputArr.pop();
      validate(inputArr);
    }
  };
  return (
    <CustomTextField
      id="outlined-basic"
      variant="outlined"
      onChange={onChangeInput}
      onFocus={onChangeInput}
    />
  );
}
const CustomTextField = styled(TextField)`
  width: 100%;
  max-width: 750px;
`;
