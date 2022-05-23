import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { GlobalStore } from './Components/GlobalContext';
import '../src/basic-style/App.module.scss';

function App() {
  return (
    <GlobalStore>
      <Header />
      {/* <Main />
      <Footer /> */}
    </GlobalStore>
  );
}

export default App;
