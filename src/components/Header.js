import React from "react";
import "../stylesheet/layout/_header.scss";
import logo from "../logoCyL.svg";

function Header() {
    return (
     <>
      <header className="header">
        <div className="logo">
          <a href="httpas://www.jcyl.es">
            <img className="image" src={logo} alt="Logo" />
          </a>
        </div>
        <h1 className="title">Información de incendios en Castilla y León</h1>
      </header>
     </>
    )
}
export default Header;