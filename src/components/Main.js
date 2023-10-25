import React from "react";
import "../stylesheet/layout/_main.scss";
import DataTable from "./DataTable"

function Main(props) {
    return (
     <>
      <main>
        <section>
        <DataTable
            data={props.data}
        />
        </section>
      </main>
     </>
    )
}
export default Main;