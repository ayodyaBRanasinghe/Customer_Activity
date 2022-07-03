import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/Ddata">
            <strong>MISTERY SRI LANKA</strong>
            <span className="sr-only">(current)</span>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="/kidsp">
                  Kids special
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cycling">
                  Cycling
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/boats">
                  Boats Ride
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/birds">
                  Birds Watching
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/handt">
                  Hiking and Trekking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/form">
                  <b>BOOK NOW</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <b>Admin Login</b>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;