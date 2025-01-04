"use server";

import { addRecipe } from "./actions";
import Form from "./form";

export default async function Add() {
  return <Form action={addRecipe} />;
}
