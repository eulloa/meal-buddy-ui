"use client";

import { ChangeEvent, Dispatch } from "react";

export default function Instructions({
  dispatch,
}: {
  dispatch: Dispatch<{ type: string; value: any }>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = document.querySelector(
      ".instructions",
    ) as HTMLTextAreaElement;
    const value = e?.target?.value;

    if (!value) {
      field.setCustomValidity("This field is required");
    } else {
      field.setCustomValidity("");
    }

    if (dispatch) {
      dispatch({ type: "inputChange.instructions", value });
    }
  };

  return (
    <input
      className="instructions min-w-full p-2 mb-2"
      name="Instructions"
      onChange={(e) => handleChange(e)}
      placeholder="Instructions"
      required={true}
      type="textarea"
    />
  );
}
