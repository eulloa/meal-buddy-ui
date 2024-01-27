import Link from "next/link";
import styles from "./page.module.css";
import { TRecipe } from "@/types";
import Layout from "@/app/layout";

async function getRecipes(): Promise<TRecipe[]> {
  const endpoint = process.env.GET_ALL_RECIPES_ENDPOINT as string;
  const res = await fetch(endpoint);
  const recipes = await res.json();

  return recipes as TRecipe[];
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <Layout>
      <main className={styles.main}>
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <div key={`Recipe - ${recipe.name}`}>
              <Link
                href={{
                  pathname: `/recipe/${recipe.id}`,
                }}
              >
                <h2>{recipe.name}</h2>
              </Link>
              <h3>Recipe id: {recipe.id}</h3>
              <h4>{recipe.description}</h4>
              <h4>Ingredients</h4>
              <ol>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={`${recipe.name} - ingredient #${index}`}>
                    {ingredient}
                  </li>
                ))}
              </ol>
              <h3>Instructions</h3>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li key={`${recipe.name} - instruction #${index}`}>
                    {instruction}
                  </li>
                ))}
              </ol>
              <a href={recipe.url} target="_blank">
                View more on the web
              </a>
            </div>
          ))}
      </main>
    </Layout>
  );
}
