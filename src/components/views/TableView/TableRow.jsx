import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableRow = ({
  id,
  fullAdress,
  yearBuilt,
  priceFormatted,
  rentFormmated,
  grossField,
  imageUrl,
}) => {
  return (
    <tr className="centeredv-content">
      <td>
        <Image src={imageUrl} roundedCircle className="image-property" />
      </td>
      <td>{fullAdress}</td>
      <td>{yearBuilt}</td>
      <td>{priceFormatted}</td>
      <td>{rentFormmated}</td>
      <td>{grossField}</td>
      <td>
        <Link to={`/detail/${id}`}>
          <button type="button" className="btn btn-outline-success">
            See Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.number,
  fullAdress: PropTypes.string,
  yearBuilt: PropTypes.any,
  priceFormatted: PropTypes.string,
  rentFormmated: PropTypes.string,
  grossField: PropTypes.string,
};

export default TableRow;
