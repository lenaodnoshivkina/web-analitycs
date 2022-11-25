import React from 'react';
import styled from 'styled-components';
import TopModule from './modules/TopModule';
import BottomModule from './modules/BottomModule';

function App() {
  return (
    <Content>
      <TopModule />
      <BottomModule />
    </Content>
  );
}

const Content = styled.div`
  margin: 0 32px;
`;

export default App;
