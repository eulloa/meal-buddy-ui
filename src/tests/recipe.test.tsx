import { TRecipe } from "@/types";
import RecipeComponent from "@/app/components/recipe";
import { render, screen } from "@testing-library/react";

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
    // TODO: recipe properties may need to be optional
    const recipe: TRecipe = {
      error: "oops",
    };

    render(<RecipeComponent {...recipe} />);
    // TODO: recipe properties may need to be optional
    expect(screen.getByText(recipe?.error as string)).toBeInTheDocument();
  });
});
