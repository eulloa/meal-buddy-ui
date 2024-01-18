import Page from "./page";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders a list of recipes when it fetches them succssfully", async () => {
    const recipes = [
      {
        name: "1",
        description: "A recipe",
        ingredients: [1, 2, 3],
        instructions: [4, 5, 6],
        url: "foo",
      },
    ];
    render(await Page({ params: { recipes } }));

    expect(screen.findByText(recipes[0].description)).toBeInTheDocument();
  });
});
