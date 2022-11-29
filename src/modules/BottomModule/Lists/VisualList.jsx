import React from 'react';
import styled from 'styled-components';
import VisualInput from '../Inputs/Visual';

export default function VisualList(props) {
  return (
    <Wrapper>
      <VisualInput
        rightArr={['Ekh6oY', 'HiSNOO', '5W3Oc1', 'voAwYN']}
        {...props}
      />
      <VisualInput
        rightArr={['VMOGSU', '2hJUhc', 'UZHet6', 'UQ6duQ']}
        {...props}
      />
      <VisualInput
        rightArr={['zVpmAv', 'Wmo1Hv', 'BOxzl3', 'vHZ3tw']}
        {...props}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;;
  gap: 16px;
  width: 100%;
`;
