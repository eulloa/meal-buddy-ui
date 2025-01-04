"use client";

import { ChangeEvent, Dispatch } from "react";

export default function Image({
  dispatch,
}: {
  dispatch: Dispatch<{ type: string; value: any }>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = document.querySelector(".image") as HTMLTextAreaElement;
    const value = e?.target?.value;

    if (!value) {
      field.setCustomValidity("This field is required");
    } else {
      field.setCustomValidity("");
    }

    if (dispatch) {
      dispatch({ type: "inputChange.image", value });
    }
  };

  return (
    <input
      className="image min-w-full p-2 mb-2"
      name="Image"
      onChange={(e) => handleChange(e)}
      placeholder="Image"
      required={true}
      type="textarea"
    />
  );
}
