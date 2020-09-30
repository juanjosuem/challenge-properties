import React from "react";
import { Link } from "react-router-dom";

const GridCard = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className="card">
        <img src={props.mainImageUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{"$" + props.priceFormatted}</h5>
          <div className="labels-inline">
            <p>
              <strong>Current rent</strong>
              {"$" + props.rentFormmated}
            </p>
            <p>
              <strong>Gross Yield</strong>
              {props.grossField + "%"}
            </p>
          </div>
          <p className="card-text">{props.fullAdress}</p>
        </div>
      </div>
    </Link>
  );
};
export default GridCard;
