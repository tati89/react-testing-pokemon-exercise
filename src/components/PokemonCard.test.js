// Test a single pokemon card:
//  - heading
//  - image
//  - button

// Import a single pokemon object to test the component.

// Do we need to test the Stats List here?
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, getByRole, logRolesnpm } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe("Single pokemon", () => {
  it("should have a heading of 'pokemon'", () => {
    render(<PokemonCard />);
    const headingEl = screen.getByRole("pokemon", { name: "pokemon" });
    expect(headingEl).toBeInTheDocument();
  });
});
