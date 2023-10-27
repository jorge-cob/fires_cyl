import React, { useState, useEffect } from "react";
import "../stylesheet/layout/_main.scss";
import StickyHeadTable from "./StickyHeadTable";
import FiresMap from "./FiresMap";
import getDataFromCyLapi from "../services/getDataFromCyLapi";
import getDataFromOsMapi from "../services/getDataFromOsMapi";
import ls from "../services/localStorage";

function createColumns(firesData) {
    const propertyNamesArray = Object.keys(firesData[0]);
    const propertyNamesObjectsArray = propertyNamesArray.map((propertyName) => ({
        id: propertyName,
        label: propertyName[0].toUpperCase() + propertyName.slice(1).replace(/_/g, " "),
        minWidth: 170,
        align: 'right',
      })
    );
    
    return propertyNamesObjectsArray
  }


function Main() {
    const [fires, setFires] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filteredProvince, setFilteredProvince] = useState(ls.get("provincia", ""));
    const [filteredProbableCause, setFilteredProbableCause] = useState(ls.get("causa_probable", ""))
    const [filteredCurrentSituation, setFilteredCurrentSituation] = useState(ls.get("situacion_actual", ""));
    const [filteredMaxLevelReached, setFilteredMaxLevelReached] = useState(ls.get("nivel_maximo_alcanzado", ""));
    
    useEffect(() => {
        getDataFromCyLapi().then((firesData) => {
            setFires(firesData);
            setColumns(createColumns(firesData))
        });
        const interval = setInterval(() => {
            getDataFromCyLapi().then((firesData) => {
                setFires(firesData);
            });
        }, 5000)

        return()=>clearInterval(interval)
        
    }, []); 

    const coordinates = fires.map(item => {
        const location = `${item.termino_municipal}, ${item.provincia}`;
        const coordinates = getDataFromOsMapi(location)
    
        return coordinates;
    }); 

    const testCoordinates = [40.4165, -3.70256];

    return (
     <>
      <main className="main">
        <section className="section">
            <h2 className="subtitle">Tabla de incendios</h2>
            <div className="content">
                 <StickyHeadTable fires={fires} />
            </div>
        </section>
        <section className="section">
            <h2 className="subtitle">Mapa de incendios</h2>
            {/* <div id="map"></div> {/*alternativa a la siguiente línea/*} */}
            <FiresMap coordinates={coordinates} testCoordinates={testCoordinates}/>
        </section>
      </main>
     </>
    )
}
export default Main;