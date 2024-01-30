"use strict";

import { TError, TRecipe } from "@/types";
import RecipeComponent from "@/app/components/recipe";
import { render, screen } from "@testing-library/react";

jest.mock("@stylexjs/stylex", () => ({
  props: () => {},
  create: () => ({}),
}));

describe("RecipeComponent", () => {
  it("renders as expected", () => {
    const recipe: TRecipe = {
      description: "Test description",
      name: "Test sample",
      id: 123,
      ingredients: ["test", "ingredients"],
      instructions: ["test", "instructions"],
      url: "Test url",
    };

    render(<RecipeComponent {...recipe} />);

    expect(screen.findByText(recipe.name)).toBeTruthy();
  });

  it("renders an error when error is passed", () => {
    const error: TError = {
      error: "Sample error",
    };

    // TODO: recipe properties may need to be optional
    const recipe: TRecipe = {
      error,
    };

    render(<RecipeComponent {...recipe} />);
    // TODO: recipe properties may need to be optional
    expect(screen.findByText(recipe?.error)).toBeTruthy();
  });
});
