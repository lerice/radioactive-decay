import * as React from 'react';

import GlobalStyle, { Clearfix } from '../global-styles';
import Halflife from './inputs/Halflife';
import InitialSample from './inputs/InitialSample';
import DecayTime from './inputs/DecayTime';

import Atoms from './outputs/Atoms';
import RemainingSample from './outputs/RemainingSample';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin: 0 auto;
  background: white;
  box-shadow: 1px 1px 3px #E8E8E8;

  @media(min-width: 768px) { width: 642px; }
`;

export default function App() {
  return (
    <AppWrapper>
      <GlobalStyle />

      <Clearfix>
        <InitialSample />
        <Halflife />
      </Clearfix>
      <DecayTime />

      <Atoms />
      <RemainingSample />
    </AppWrapper>
  );
}
