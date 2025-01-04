"use client";

import { ChangeEvent, Dispatch } from "react";

export default function Description({
  dispatch,
}: {
  dispatch: Dispatch<{ type: string; value: any }>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = document.querySelector(".description") as HTMLTextAreaElement;
    const value = e?.target?.value;

    if (!value) {
      field.setCustomValidity("This field is required");
    } else {
      field.setCustomValidity("");
    }

    if (dispatch) {
      dispatch({ type: "inputChange.description", value });
    }
  };

  return (
    <input
      className="description min-w-full p-2 mb-2"
      name="Description"
      onChange={(e) => handleChange(e)}
      placeholder="Description"
      required={true}
      type="textarea"
    />
  );
}
