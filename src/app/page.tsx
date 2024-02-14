import React, { Fragment } from "react";
import { TRecipe } from "@/types";
import { RecipeComponent } from "@/app/components";

async function getRecipes(): Promise<TRecipe[]> {
  const endpoint = process.env.GET_ALL_RECIPES_ENDPOINT as string;
  const res = await fetch(endpoint);
  const recipes = await res.json();

  return recipes as TRecipe[];
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main className="flex min-h-screen flex-col justify-between px-4 md:px-48">
      {recipes?.length &&
        recipes.map((recipe, index) => (
          <Fragment key={`${recipe.name}-${index}`}>
            <RecipeComponent {...recipe} />
          </Fragment>
        ))}
    </main>
  );
}
