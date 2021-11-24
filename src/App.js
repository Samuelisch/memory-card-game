import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-family: Helvetica;
    font-size: 10px;
    margin: 0;
    background: rgb(0, 20, 60);
  }
`;

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
