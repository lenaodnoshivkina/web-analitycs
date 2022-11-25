import React from 'react';
import styled from 'styled-components';
import NumberList from '../NumberList';
import CaptchaList from './CaptchaList';

export default function TopModule() {
  return (
    <Wrapper>
      <NumberList />
      <CaptchaList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
