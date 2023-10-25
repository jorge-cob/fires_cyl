import React from "react";
// import Header from "./Header";
import Main from "./Main";
// import Footer from "./Footer";
import './App.css';

const fireList = [
  {
   id: 456,
   provincia: {0: "BURGOS" },
   causa_probable: "ACCIDENTAL (LÍNEAS ELÉCTRICAS)",
   situacion_actual: "EXTINGUIDO",
   nivel_máximo_alcanzado: 3,
   localizacion: 654,
  }, 

  {
   id: 723,
   provincia: {0: "LEÓN" },
   causa_probable: "ACCIDENTAL (LÍNEAS ELÉCTRICAS)",
   situacion_actual: "EXTINGUIDO",
   nivel_máximo_alcanzado: 3,
   localizacion: 456,
  }
 ]

function App() {

  const data = {nodes: fireList};
  
  return (
    <>
      {/* <Header/> */}
      <Main
        data={data}
      />
      {/* <Footer/> */}
    </>
  );
}

export default App;
