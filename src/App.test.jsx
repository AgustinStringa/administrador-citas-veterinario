import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App title", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Administrador de consultas veterinarias/i,
  );
  expect(linkElement).toBeInTheDocument();
});
