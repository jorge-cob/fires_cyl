import React, { useEffect, useState } from "react";
// import Header from "./Header";
import Main from "./components/Main";
// import Footer from "./Footer";
import './stylesheet/App.scss';
import getDataFromApi from "./services/getDataFromApi";


function App() {
  const [fires, setFires] = useState([]);

  useEffect(() => {
    if (fires.length === 0) {
      getDataFromApi().then((firesData) => {
        setFires(firesData);
      });
    }
  }, []); // habrá que hacer aquí algo???
  
  return (
    <>
      {/* <Header/> */}
      <Main
        data={fires}
      />
      {/* <Footer/> */}
    </>
  );
}

export default App;
