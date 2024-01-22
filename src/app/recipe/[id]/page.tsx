import { RecipeParams, TRecipe } from "@/types";
import RecipeComponent from "@/app/components/recipe";

async function getRecipe(id: number): Promise<TRecipe> {
  const endpoint = `${process.env.GET_RECIPE_ENDPOINT}/${id}` as string;
  const res = await fetch(endpoint);
  const recipe = await res.json();

  return recipe;
}

export default async function Recipe({ params }: RecipeParams) {
  const { id } = params;
  const recipe = await getRecipe(id);

  return <RecipeComponent {...recipe} />;
}
