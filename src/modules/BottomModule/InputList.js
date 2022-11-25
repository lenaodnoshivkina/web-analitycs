import React from 'react';
import styled from 'styled-components';
import VisualInput from './Inputs/Visual';
import SoundInput from './Inputs/Sound';

export default function InputList() {
  return (
    <Wrapper>
      <SoundInput
        rightArr={['Ekh6oY', 'HiSNOO', '5W3Oc1', 'voAwYN']}
      />
      <VisualInput
        rightArr={['VMOGSU', '2hJUhc', 'JZHel6', 'UQ6duQ']}
      />
      <VisualInput
        rightArr={['zVpmAv', 'Wmo1Hv', 'BOxzl3', 'uHZ3tw']}
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
