import {render, screen, cleanup} from '@testing-library/react';
import Logger from "../Logger"

test("should render a dot when succesfully loaded", () => {
  render(<Logger />);
  const titleElement = screen.getByTestId("logger-listing")
  expect(titleElement).toBeInTheDocument();
});

test("should render the logger element when successfully loaded", async () => {
  render(<Logger />);
  const titleElement = await screen.findByTestId("logger-listing")
  expect(titleElement).toBeInTheDocument();
});
