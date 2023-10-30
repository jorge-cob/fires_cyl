import React, { useEffect, useState } from "react";
import "../stylesheet/layout/_main.scss";
import Filters from './Filters';
import StickyHeadTable from "./StickyHeadTable";
import FiresMap from "./map/FiresMap";
import { columnGenerator } from '../utils/utils';
import { useAPI } from '../services/apiContext';

function Main(props) {
    const { filteredFires, fires, coordinates } = useAPI();
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (filteredFires.length > 0) {
            setColumns(columnGenerator(filteredFires))
        }
    }, [filteredFires])
    
    // NECESITO AQUÍ OTRO USEEFFECT PARA EL MAPA??

    //quitar las props!!
  

    return (
     <>
      <main className="main">
        <section className="section">
            <h2 className="subtitle">Tabla de incendios</h2>
            <div className="content">
                <Filters  />
                <StickyHeadTable data={filteredFires} columns={columns} />            
            </div>
        </section>
        <section className="section">
            <h2 className="subtitle">Mapa de incendios</h2>
            <div className="content">
              <div id="map">
                <FiresMap  />
              </div>                
            </div>
        </section>
      </main>
     </>
    )
}
export default Main;