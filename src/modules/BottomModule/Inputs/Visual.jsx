import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

export default function VisualInput(props) {
  const { rightArr, setHasError, setAmountOfError } = props;
  const [error, setError] = useState(false);

  const validate = (inputArr, onChange) => {
    // eslint-disable-next-line max-len
    const validateArr = inputArr.filter((item, index) => item.toLowerCase() !== rightArr[index].toLowerCase());
    if (validateArr.length) {
      setError(true);
      setHasError(true);
      if (onChange) setAmountOfError((prevState) => prevState + 1);
      setTimeout(() => {
        setError(false);
      }, 1500);
    } else {
      setError(false);
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
      error={error}
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
