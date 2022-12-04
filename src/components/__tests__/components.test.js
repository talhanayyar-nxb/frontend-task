import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Loader from "../loader/Loader";
import BreadCrumbs from "../navbar/BreadCrumbs";

// GET BY
test("should render a dot when succesfully loaded", async () => {
  render(<Loader />);
  const dotElement = screen.getByText(/./i);
  expect(dotElement).toBeInTheDocument();
});

// FIND BY
test("should render a dot when succesfully loaded", async () => {
  render(<Loader />);
  const dotElement = await screen.findByText(/./i);
  expect(dotElement).toBeInTheDocument();
});

// FIND BY
test("should render the list when successfully loaded", async () => {
  render(<BreadCrumbs />);
  const breadCrumbsElement = await screen.findByTestId('breadcrumbs-nav');
  expect(breadCrumbsElement).toBeInTheDocument();
});
