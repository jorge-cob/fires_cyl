import React from "react";
import "../stylesheet/layout/_main.scss";
import StickyHeadTable from "./StickyHeadTable";
import Map from "./Map";


function Main(props) {
    return (
     <>
      <main className="main">
        <section className="section">
            <h2 className="subtitle">Tabla de incendios</h2>
            <div className="content">
                 {/* <StickyHeadTable data={props.data}/>∫ */}
            </div>
        </section>
        <section className="section">
            <h2 className="subtitle">Mapa de incendios</h2>
            <div className="content">
                <Map data={props.data} />
            </div>
        </section>
      </main>
     </>
    )
}
export default Main;