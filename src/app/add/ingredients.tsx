"use client";

import { ChangeEvent, Dispatch } from "react";

export default function Ingredients({
  dispatch,
}: {
  dispatch: Dispatch<{ type: string; value: any }>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = document.querySelector(".ingredients") as HTMLTextAreaElement;
    const value = e?.target?.value;

    if (!value) {
      field.setCustomValidity("This field is required");
    } else {
      field.setCustomValidity("");
    }

    if (dispatch) {
      dispatch({ type: "inputChange.ingredients", value });
    }
  };

  return (
    <input
      className="ingredients min-w-full p-2 mb-2"
      name="Ingredients"
      onChange={(e) => handleChange(e)}
      placeholder="Ingredients"
      required={true}
      type="textarea"
    />
  );
}
