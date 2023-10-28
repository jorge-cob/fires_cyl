import React, { useEffect, useState } from "react";
import "../stylesheet/layout/_main.scss";
import StickyHeadTable from "./StickyHeadTable";
import FiresMap from "./map/FiresMap";
import getDataFromOsMapi from "../services/getDataFromOsMapi";
import getDataFromCyLapi from "../services/getDataFromCyLapi";

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
    const [fires, setFires] = useState([]);
    const [columns, setColumns] = useState([]);
    
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
        
    }, []); // habrá que hacer aquí algo???


    // const coordinates = props.data.map(item => {
    //     const location = `${item.termino_municipal}, ${item.provincia}`;
    //     const coordinates = getDataFromOsMapi(location)
    
    //     return coordinates;
    // });

    const coords = [41.65518, -4.72372];

    return (
     <>
      <main className="main">
        <section className="section">
            <h2 className="subtitle">Tabla de incendios</h2>
            <div className="content">
            {/* <StickyHeadTable data={fires} columns={columns}/>  */}
            </div>
        </section>
        <section className="section">
            <h2 className="subtitle">Mapa de incendios</h2>
            <div className="content">
              <div id="#map">
                <FiresMap data={props.data} coords={coords}/>
              </div>                
            </div>
        </section>
      </main>
     </>
    )
}
export default Main;