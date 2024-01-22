import { TError } from "@/types";

export type TRecipe = {
  description: string;
  error?: TError;
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
