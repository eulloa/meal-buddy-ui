import { TRecipe } from "@/types";

export default function RecipeComponent(recipe: TRecipe) {
  // TODO: render Error component
  if (recipe?.error) {
    return (
      <div>
        <h1>{JSON.stringify(recipe?.error)}</h1>;
      </div>
    )
  }

  return (
    <main>
      <div key={`Recipe - ${recipe.name}`}>
        <h2>{recipe.name}</h2>
        <h3>Recipe id: {recipe.id}</h3>
        <h4>{recipe.description}</h4>
        <h4>Ingredients</h4>
        <ol>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={`${recipe.name} - ingredient #${index}`}>{ingredient}</li>
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
    </main>
  );
}
