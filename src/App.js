import React, { useState } from 'react';
import styled from 'styled-components';
import Start from './modules/Start';
import TopModule from './modules/TopModule';
import BottomModule from './modules/BottomModule';
import Finish from './modules/Finish';
import { getVersion } from './helpers';
import SoundCheck from './modules/TopModule/SoundCheck';

function App() {
  const [stage, updateStage] = useState('start');
  const startHandler = () => {
    const ver = getVersion();
    if (ver === '0') {
      updateStage('soundCheck');
    } else {
      updateStage('test');
    }
  };
  let RenderComponent;

  switch (stage) {
    case 'start':
      RenderComponent = <Start updateStage={startHandler} />;
      break;
    case 'soundCheck':
      RenderComponent = <SoundCheck updateStage={updateStage} />;
      break;
    case 'test':
      RenderComponent = (
        <>
          <TopModule />
          <BottomModule
            updateStage={updateStage}
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
