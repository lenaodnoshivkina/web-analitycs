import React from 'react';
import styled from 'styled-components';

export default function NumberList() {
  return (
    <Wrapper>
      <Number>1.</Number>
      <Number>2.</Number>
      <Number>3.</Number>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
`;

const Number = styled.span`
  font-family: Roboto sans-serif;
  font-size: 32px;
`;
