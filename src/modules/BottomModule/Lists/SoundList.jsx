import React from 'react';
import styled from 'styled-components';
import SoundInput from '../Inputs/Sound';

export default function SoundList(props) {
  return (
    <Wrapper>
      <SoundInput
        rightArr={['Ekh6uY', 'HiSNOO', '5W3Oc1', 'voAwYN']}
        {...props}
      />
      <SoundInput
        rightArr={['VMOGSU', '2hJUhc', 'JZHet6', 'UQ6duQ']}
        {...props}
      />
      <SoundInput
        rightArr={['zVpmAw', 'Wmo1Hv', 'Boxzl3', 'vHZ3tw']}
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
