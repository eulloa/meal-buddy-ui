"use client";
import { ChangeEvent, Dispatch } from "react";

export default function Name({
  dispatch,
}: {
  dispatch: Dispatch<{ type: string; value: any }>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = document.querySelector(".name") as HTMLInputElement;
    const value = e.target.value;

    if (!value) {
      field?.setCustomValidity("Not valid");
    } else {
      field?.setCustomValidity("");
    }

    if (dispatch) {
      dispatch({ type: "inputChange.name", value });
    }
  };

  return (
    <input
      className="name min-w-full p-2 mb-2"
      name="Name"
      onChange={(e) => handleChange(e)}
      placeholder="Name"
      required={true}
    />
  );
}
