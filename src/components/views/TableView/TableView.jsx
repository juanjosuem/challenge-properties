import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Loader from "../../common/Loader";
import { AppContext } from "../../../contexts/appContext";
import withSanitizedData from "../../hocs/withSanitizedData";
import "./TableView.scss";

const TableView = () => {
  const context = useContext(AppContext);
  if (!context) return <Loader />;
  return (
    <Table striped bordered hover variant="dark">
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
        {context.properties.map((item) => withSanitizedData(TableRow, item))}
      </tbody>
    </Table>
  );
};

export default TableView;
