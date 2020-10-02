import React from "react";
import { shallow } from "../enzyme";
import DetailGallery from "../components/views/DetailView/DetailGallery";

describe("DetailGallery Tests", () => {
  it("renders message when resources its null", () => {
    const wrapper = shallow(<DetailGallery resources={null} />);
    expect(wrapper.find("h5").text()).toEqual(
      "The property does not have images"
    );
  });
  it("renders carousel", () => {
    const resources = {
      photos: [
        {
          id: 222,
          url: "http://example.com/test.jpg",
        },
        {
          id: 32332,
          url: "http://example.com/testa.jpg",
        },
        {
          id: 54545,
          url: "http://example.com/testb.jpg",
        },
      ],
    };
    const wrapper = shallow(<DetailGallery resources={resources} />);
    expect(wrapper.find(".carousel").children()).toHaveLength(2);
  });
});
