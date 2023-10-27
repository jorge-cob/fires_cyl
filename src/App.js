import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './stylesheet/App.scss';
import getDataFromCyLapi from "./services/getDataFromCyLapi";


function App() {
  const [fires, setFires] = useState([]);

  useEffect(() => {
    if (fires.length === 0) {
      getDataFromCyLapi().then((firesData) => {
        setFires(firesData);
      });
    }
  }, []); // habrá que hacer aquí algo???
  
  return (
    <>
      <Header/>
      <Main
        data={fires}
      />
      <Footer/>
    </>
  );
}

export default App;
