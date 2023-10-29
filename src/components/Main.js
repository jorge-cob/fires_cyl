import React, { useEffect, useState } from "react";
import "../stylesheet/layout/_main.scss";
import Filters from './Filters';
import StickyHeadTable from "./StickyHeadTable";
import FiresMap from "./map/FiresMap";
import { columnGenerator } from '../utils/utils';
import { useAPI } from '../services/apiContext';
import getDataFromCyLapi from "../services/getDataFromCyLapi";
import coordinates from "../utils/utils";

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

function Main(props) {
    const { filteredFires } = useAPI();
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (filteredFires.length > 0) {
            setColumns(columnGenerator(filteredFires))
        }
    }, [filteredFires])
    

    
    // array de coordenadas de los incendios filtrados para pasar a FireMap
    //const filteredFires = coordinates(dataFiltered);
    const coords = [41.65518, -4.72372];

    // OJO!! FALTA METERLE LA SIGUIENTE PROP A FIRESMAP: filteredFires={filteredFires}
  

    return (
     <>
      <main className="main">
        <section className="section">
            <h2 className="subtitle">Tabla de incendios</h2>
            <div className="content">
                <Filters  />
                <StickyHeadTable data={filteredFires} columns={columns} />             </div>
        </section>
        <section className="section">
            <h2 className="subtitle">Mapa de incendios</h2>
            <div className="content">
              <div id="map">
                <FiresMap  coords={coords} />
              </div>                
            </div>
        </section>
      </main>
     </>
    )
}
export default Main;