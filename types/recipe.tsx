export type TRecipe = {
  description: string;
  error?: string;
  id: number;
  ingredients: string[];
  instructions: string[];
  name: string;
  url: string;
};

export type RecipeParams = {
  params: {
    id: number;
  };
};
