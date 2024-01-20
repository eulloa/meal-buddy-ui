import Page from "../app/page";
import { render, screen, waitFor } from "@testing-library/react";

describe("Page", () => {
  it("renders a list of recipes when recipes are fetched", async () => {
    const recipes = [
      {
        name: "1",
        description: "A recipe",
        ingredients: [1, 2, 3],
        instructions: [4, 5, 6],
        url: "foo",
      },
    ]

    // global.fetch = jest.fn().mockResolvedValueOnce({
    //   json: jest.fn().mockResolvedValueOnce({ recipes }),
    // });

    const result = await Page({ recipes });
    // render(result);

    // expect(screen.findByText(recipes[0].description));
    // waitFor(() => {
    // });
  });
});
