import React from "react";
import { shallow } from "../enzyme";
import DetailsText from "../components/views/DetailView/DetailsText";

it("renders DetailsText", () => {
  const address = {
    address1: "4200 Skyway Dr",
    city: "Cocoa",
    state: "FL",
    zip: "32927",
  };
  const description = "some text";
  const wrapper = shallow(
    <DetailsText address={address} description={description} />
  );
  expect(wrapper.find("p").text()).toEqual("4200 Skyway Dr, Cocoa, FL 32927");
  expect(wrapper.find("span").text()).toEqual(description);
});
