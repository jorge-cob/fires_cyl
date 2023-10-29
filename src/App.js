import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './stylesheet/App.scss';
import { APIContextProvider } from './services/apiContext';

function App() {

  return (
    <APIContextProvider>
      <Header/>
      <Main/>
      <Footer/>
      
    </APIContextProvider>
  );
}

export default App;

