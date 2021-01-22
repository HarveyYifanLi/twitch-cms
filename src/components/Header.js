import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id='header-container'>
      <nav className="navbar justify-content-center">
        <li className="nav-item nav-link">
          <Link to="/">Recommended Channels</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/top-streams">Top Live Channels</Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;