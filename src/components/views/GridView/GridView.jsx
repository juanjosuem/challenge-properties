import React, { useContext } from "react";
import GridCard from "./GridCard";
import { AppContext } from "../../../contexts/appContext";
import Loader from "../../common/Loader";
import withSanitizedData from "../../hocs/withSanitizedData";
import "./GridView.scss";

const GridView = () => {
  const context = useContext(AppContext);
  if (!context) return <Loader />;
  return (
    <div className="grid">
      {context.properties.map((item) => withSanitizedData(GridCard, item))}
    </div>
  );
};

export default GridView;
