import React from "react";
import "../stylesheet/layout/_main.scss";
import StickyHeadTable from "./StickyHeadTable";


function Main(props) {
    return (
     <>
      <main>
        <section className="section">
            <h1>Lista de incendios</h1>
            <StickyHeadTable data={props.data}/>∫

        </section>
      </main>
     </>
    )
}
export default Main;