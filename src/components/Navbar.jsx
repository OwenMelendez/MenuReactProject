import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i className="bi bi-car-front-fill"></i> Carshop
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-decoration-underline" : "")
                }
              >
                <i className="bi bi-house-fill"></i> Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/carros"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-decoration-underline" : "")
                }
              >
                <i className="bi bi-truck-front-fill"></i> Carros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/conductores"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-decoration-underline" : "")
                }
              >
                <i className="bi bi-person-badge-fill"></i> Conductores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/configuracion"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " text-decoration-underline" : "")
                }
              >
                <i className="bi bi-gear-fill"></i> Configuración
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
