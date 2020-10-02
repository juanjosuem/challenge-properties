import React from "react";
import { Carousel, Col } from "react-bootstrap";

const DetailGallery = ({ resources }) => {
  const photos = resources?.photos.slice(1, resources.photos.length);
  return (
    <Col>
      {!resources ? (
        <h5>The property does not have images</h5>
      ) : (
        <Carousel className="carousel">
          {photos.map((photo) => (
            <Carousel.Item key={photo.id}>
              <img
                className="d-block w-100"
                src={photo.url}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Col>
  );
};
export default DetailGallery;
