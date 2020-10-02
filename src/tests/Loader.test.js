import React from "react";
import { render } from "@testing-library/react";
import Loader from "../components/common/Loader";

test("renders Loader", () => {
  const { getByText } = render(<Loader />);
  const loaderElement = getByText(/Loading/i);
  expect(loaderElement).toBeInTheDocument();
});
