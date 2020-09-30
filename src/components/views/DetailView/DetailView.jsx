import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { AppContext } from "../../../contexts/appContext";
import Loader from "../../common/Loader";
import "./DetailView.scss";

class DetailView extends Component {
  static contextType = AppContext;

  render() {
    if (!this.context) return <Loader />;
    const {
      params: { id },
    } = this.props.match;
    const { properties } = this.context;

    const itemFound = properties.find((item) => item.id == id);

    if (!itemFound.resources) return <h3>No images found</h3>;

    const photos = itemFound.resources.photos;
    const address = itemFound.address;

    return (
      <Carousel className="carousel">
        {photos.map((photo) => (
          <Carousel.Item key={photo.id}>
            <img className="d-block w-100" src={photo.url} alt="First slide" />
            <Carousel.Caption className="blackbox">
              <h3>
                {address.address1}, {address.city}, {address.state}{" "}
                {address.zip}
              </h3>
              <p>{itemFound.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
export default withRouter(DetailView);
