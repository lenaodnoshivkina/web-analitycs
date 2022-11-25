import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

export default function VisualInput(props) {
  // eslint-disable-next-line react/prop-types
  const { rightArr } = props;
  const [error, setError] = useState(false);

  const validate = (inputArr) => {
    const validateArr = inputArr.filter((item, index) => item !== rightArr[index]);
    if (validateArr.length) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    } else {
      setError(false);
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
      error={error}
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
