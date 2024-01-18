import styles from "./page.module.css";
import { Recipe } from "@/types";

async function getRecipes(): Promise<Recipe[]> {
  const endpoint = process.env.SERVER_ENDPOINT as string;
  const res = await fetch(endpoint);
  const recipes = await res.json();

  return recipes as Recipe[];
}

export default async function Home() {
  const recipes = (await getRecipes());

  if (!recipes || recipes.length === 0) {
    return (
      <main className={styles.main}>
        <h1>No recipes found</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      {recipes &&
        recipes.length > 0 &&
        recipes.map((recipe) => (
          <div key={`Recipe - ${recipe.name}`}>
            <h2>{recipe.name}</h2>
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
  );
}
