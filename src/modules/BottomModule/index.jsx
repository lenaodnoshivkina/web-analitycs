import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import useSound from 'use-sound';
import NumberList from '../NumberList';
import { getVersion, send } from '../../helpers';
import SoundList from './Lists/SoundList';
import VisualList from './Lists/VisualList';
import boopSfx from '../../sounds/boop.wav';

export default function BottomModule({ updateStage, startTime }) {
  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [amountOfError, setAmountOfError] = useState(0);
  const [play] = useSound(boopSfx);
  const ver = Number(getVersion());

  const submitHandler = () => {
    if (!hasError && hasError !== null) {
      send(ver, startTime, amountOfError);
      updateStage('finish');
    } else if (ver === 0) {
      play();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  };

  return (
    <>
      <Wrapper
        $error={error}
      >
        <NumberList />
        { ver === 0
          ? (
            <SoundList
              setHasError={setHasError}
              setAmountOfError={setAmountOfError}
            />
          )
          : (
            <VisualList
              setHasError={setHasError}
              setAmountOfError={setAmountOfError}
            />
          )}
      </Wrapper>
      <CustomButton variant="contained" color="success" onClick={submitHandler}>Отправить</CustomButton>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  border: ${({ $error }) => ($error ? '2px solid red' : 'none')};
`;
const CustomButton = styled(Button)`
  margin: 16px 0 !important;
`;
