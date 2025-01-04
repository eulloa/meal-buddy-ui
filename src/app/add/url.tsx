"use client";

import { ChangeEvent, Dispatch } from "react";

export default function Url({
  dispatch,
}: {
  dispatch: Dispatch<{ type: string; value: any }>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = document.querySelector(".url") as HTMLTextAreaElement;
    const value = e?.target?.value;

    if (!value) {
      field.setCustomValidity("This field is required");
    } else {
      field.setCustomValidity("");
    }

    if (dispatch) {
      dispatch({ type: "inputChange.url", value });
    }
  };

  return (
    <input
      className="url min-w-full p-2 mb-2"
      name="Url"
      onChange={(e) => handleChange(e)}
      placeholder="Url"
      required={true}
      type="textarea"
    />
  );
}
