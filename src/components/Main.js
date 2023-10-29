import React, { useState, useEffect } from 'react';
import '../stylesheet/layout/_main.scss';
import StickyHeadTable from './StickyHeadTable';
import Filters from './Filters';
import { columnGenerator } from '../utils/utils';
import { useAPI } from '../services/apiContext';


function Main() {
    const { filteredFires } = useAPI();
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (filteredFires.length > 0) {
            setColumns(columnGenerator(filteredFires))
        }
    }, [filteredFires])
    
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
            
        </section>
      </main>
     </>
    )
}
export default Main;