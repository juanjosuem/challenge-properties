import React, { Component } from "react";
import "./TableView.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Loader from "../../common/Loader";
import { AppContext } from "../../../contexts/appContext";
import { Redirect, withRouter } from "react-router-dom";
import withSanitizedData from "../../hocs/withSanitizedData";

class TableView extends Component {
  static contextType = AppContext;

  render() {
    if (!this.context) return <Loader />;

    const { properties } = this.context;

    return (
      <table className="table table-dark tableview">
        <TableHeader
          headers={[
            "Image",
            "Address",
            "Year Built",
            "List Price",
            "Monthly Rent",
            "Gross Yield",
          ]}
        />
        <tbody>
          {properties.map((item) => withSanitizedData(TableRow, item))}
        </tbody>
      </table>
    );
  }
}

export default withRouter(TableView);
