import React, { Component } from "react";

import { AppContext } from "../../../contexts/appContext";
import Loader from "../../common/Loader";
import withSanitizedData from "../../hocs/withSanitizedData";
import GridCard from "./GridCard";
import "./GridView.scss";

class GridView extends Component {
  static contextType = AppContext;

  render() {
    if (!this.context) return <Loader />;

    const { properties } = this.context;
    return (
      <div className="grid">
        {properties.map((item) => withSanitizedData(GridCard, item))}
      </div>
    );
  }
}

export default GridView;
