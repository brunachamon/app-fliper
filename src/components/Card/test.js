import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./";

describe("Card", () => {
  it("should render a card with `Card danger` and class", async () => {
    render(<Card className="card-header--danger">Card danger</Card>);
    const card = screen.getByText("Card danger");

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("card-header--danger");
  });
});
