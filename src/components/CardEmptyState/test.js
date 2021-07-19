import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CardEmptyState from "./";

describe("CardEmptyState", () => {
  it("should render a component with text to not found content", async () => {
    render(<CardEmptyState />);

    expect(screen.getByText("Nenhum resultado encontrado =(")).toBeInTheDocument();
  });
});
