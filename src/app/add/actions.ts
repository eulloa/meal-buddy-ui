const makePayload = (formData: FormData) => ({
  Description: formData?.get("Description"),
  Image: formData?.get("Image"),
  Instructions: [formData?.get("Instructions")],
  Ingredients: [formData?.get("Ingredients")],
  Name: formData?.get("Name"),
  Url: formData?.get("Url"),
});

export async function addRecipe(formData: FormData) {
  "use server";

  const payload = makePayload(formData);

  const endpoint = process.env.POST_RECIPE_ENDPOINT as string;

  const request = new Request(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const res = await fetch(request);

  console.log("!!! res: ", res);

  return res.json();
}
