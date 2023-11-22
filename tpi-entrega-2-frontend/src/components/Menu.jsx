import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#!">
          <i>Pymes</i>
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/inicio">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clientes">
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/boletas">
                Boletas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cuentas">
                Cuentas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sucursales">
                Sucursales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/localidades">
                Localidades
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Menu };
