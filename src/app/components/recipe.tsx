import { TRecipe } from "@/types";
import { Error } from "@/app/components";

export default function RecipeComponent(recipe: TRecipe) {
  if (recipe?.error) {
    return <Error error={recipe.error} />;
  }

  return (
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
          <li key={`${recipe.name} - instruction #${index}`}>{instruction}</li>
        ))}
      </ol>
      <a href={recipe.url} target="_blank">
        View more on the web
      </a>
    </div>
  );
}
