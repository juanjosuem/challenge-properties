import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
const Toolbar = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">List of Properties</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        {pathname.indexOf("/detail") === -1 ? (
          <>
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
          </>
        ) : (
          <Button variant="success" onClick={() => history.goBack()}>
            Go Back
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Toolbar;
