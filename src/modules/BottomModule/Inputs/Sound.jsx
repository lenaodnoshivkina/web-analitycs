import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import { TextField } from '@mui/material';
import boopSfx from '../../../sounds/boop.wav';

export default function SoundInput(props) {
  const { rightArr, setHasError, setAmountOfError } = props;
  const [play] = useSound(boopSfx);

  const validate = (inputArr, onChange) => {
    // eslint-disable-next-line max-len
    const validateArr = inputArr.filter((item, index) => item.toLowerCase() !== rightArr[index].toLowerCase());
    if (validateArr.length) {
      play();
      setHasError(true);
      if (onChange) setAmountOfError((prevState) => prevState + 1);
    } else {
      setHasError(false);
    }
  };

  const onChangeInput = (e, onChange = true) => {
    if (e.target.value.slice(-1) === ' ' || e.target.value.length > 26) {
      const inputArr = e.target.value.split(' ');
      inputArr.pop();
      validate(inputArr, onChange);
    }
  };
  return (
    <CustomTextField
      id="outlined-basic"
      variant="outlined"
      onChange={onChangeInput}
      onFocus={(e) => onChangeInput(e, false)}
    />
  );
}
const CustomTextField = styled(TextField)`
  width: 100%;
  max-width: 750px;
`;
