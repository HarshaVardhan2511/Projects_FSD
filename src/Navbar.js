import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ margin: "1px", paddingLeft: "30px",paddingTop: "17px" }}>
      <h5 className="text-warning bg-dark" to="/">
        SHOPPING BAZAAR
      </h5>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ margin: "1px", paddingLeft: "30px" }}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Catalog <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item" style={{ margin: "1px", paddingLeft: "30px" }}>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
