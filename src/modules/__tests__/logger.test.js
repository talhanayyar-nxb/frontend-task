import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import {render, screen, cleanup} from '@testing-library/react';
import Logger from "../Logger/Logger"

test("should render logger component", () => {
  render(<Logger />);
  const loggerElement = screen.getByTestId('logger-1')
  expect(loggerElement).toBe(toBeInTheDocument);
});
