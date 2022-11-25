import React from 'react';
import styled from 'styled-components';
import NumberList from '../NumberList';
import InputList from './InputList';

export default function BottomModule() {
  return (
    <Wrapper>
      <NumberList />
      <InputList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;
