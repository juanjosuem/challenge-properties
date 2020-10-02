import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import DetailGallery from "./DetailGallery";
import { AppContext } from "../../../contexts/appContext";
import Loader from "../../common/Loader";
import DetailsText from "./DetailsText";
import "./DetailView.scss";

const DetailView = ({ match }) => {
  const context = useContext(AppContext);
  if (!context) return <Loader />;
  const { id } = match.params;
  const { properties } = context;
  const itemFound = properties.find((item) => item.id === Number(id));

  return (
    <Row>
      <DetailGallery {...itemFound} />
      <DetailsText {...itemFound} />
    </Row>
  );
};

export default DetailView;
