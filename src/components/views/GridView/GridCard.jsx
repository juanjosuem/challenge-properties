import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const GridCard = ({
  id,
  fullAdress,
  priceFormatted,
  rentFormmated,
  grossField,
  imageUrl,
}) => {
  return (
    <Link to={`/detail/${id}`}>
      <Card>
        <Card.Img variant="top" src={imageUrl} className="card-img-top" />
        <Card.Body>
          <Card.Title>{priceFormatted}</Card.Title>
          <div className="labels-inline">
            <p>
              <strong>Current rent</strong> {rentFormmated}
            </p>
            <p>
              <strong>Gross Yield</strong> {grossField}
            </p>
          </div>
          <Card.Text>{fullAdress}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

GridCard.propTypes = {
  id: PropTypes.number,
  fullAdress: PropTypes.string,
  yearBuilt: PropTypes.any,
  priceFormatted: PropTypes.string,
  rentFormmated: PropTypes.string,
  grossField: PropTypes.string,
};

export default GridCard;
