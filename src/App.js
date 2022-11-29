import React, { useState } from 'react';
import styled from 'styled-components';
import Start from './modules/Start';
import TopModule from './modules/TopModule';
import BottomModule from './modules/BottomModule';
import Finish from './modules/Finish';

function App() {
  const [stage, updateStage] = useState('start');
  const [startTime, setStartTime] = useState(null);
  const startHandler = () => {
    updateStage('test');
    setStartTime(new Date());
  };
  let RenderComponent;

  switch (stage) {
    case 'start':
      RenderComponent = <Start updateStage={startHandler} />;
      break;
    case 'test':
      RenderComponent = (
        <>
          <TopModule />
          <BottomModule
            updateStage={updateStage}
            startTime={startTime}
          />
        </>
      );
      break;
    default:
      RenderComponent = <Finish />;
  }
  return (
    <Content>
      {RenderComponent}
    </Content>
  );
}

const Content = styled.div`
  margin: 0 32px;
`;

export default App;
