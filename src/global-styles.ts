import styled from 'styled-components';
import { createGlobalStyle } from './styles/styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    padding: 50px 0;
    background: #f7f7f7;
    overflow-x: hidden;
  }

  input {
    width: 70px;
    background: rgba(0, 0, 0, 0.05);
    padding: 2px;
    margin-right: 2px;
    text-align: right;
  }
`;

export default GlobalStyle;

export const Clearfix = styled.div`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;
