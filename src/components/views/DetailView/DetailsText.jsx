import React from "react";
import { Col } from "react-bootstrap";

const DetailsText = ({ address, description }) => {
  return (
    <Col>
      <h5>Address:</h5>
      <p>
        {address.address1}, {address.city}, {address.state} {address.zip}
      </p>
      <h5>Description:</h5>
      <span>{description}</span>
    </Col>
  );
};

export default DetailsText;
