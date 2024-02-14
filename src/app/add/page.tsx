import { AddRecipe } from "@/app/components";

export default async function Add() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-4 md:px-48">
      <AddRecipe />
    </main>
  );
}
