import React from "react";
import "./Nav.css";
import { Link, Outlet } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">Fertilizer Dashboard</div>
        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chart">Chart</Link>
          </li>
          <li>
            <Link to="/topfertilizer">ToFertilizer</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
