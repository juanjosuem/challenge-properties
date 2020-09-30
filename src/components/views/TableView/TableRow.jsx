import React from "react";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr className="centeredv-content">
      <td>
        <img
          src={props.mainImageUrl}
          className={props.mainImageUrl && "image-property"}
          alt="property"
        />
      </td>
      <td>{props.fullAdress}</td>
      <td>{props.yearBuilt}</td>
      <td>{"$" + props.priceFormatted}</td>
      <td>{"$" + props.rentFormmated}</td>
      <td>{props.grossField + "%"}</td>
      <td>
        <Link to={`/detail/${props.id}`}>
          <button type="button" className="btn btn-outline-success">
            See Details
          </button>
        </Link>
      </td>
    </tr>
  );
};
export default TableRow;
