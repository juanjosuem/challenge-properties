import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">List of Properties</a>
      <div className="btn-group my-2 my-sm-0" role="group">
        <Link to="/list">
          <button type="button" className="btn btn-primary">
            List
          </button>
        </Link>
        <Link to="/grid">
          <button type="button" className="btn btn-secondary">
            Grid
          </button>
        </Link>
      </div>
    </nav>
  );
}
