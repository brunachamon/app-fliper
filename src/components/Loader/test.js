import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loader from "./";

describe("Loader", () => {
  it("should render a loader component in screen with classes", async () => {
    render(<Loader />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
});
