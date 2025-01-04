import initialState from "./initialState";
import { IAction, IState } from "./interfaces";

export default function reducer(state: IState, action: IAction) {
  if (action.type === "inputChange.description") {
    const fields = state.fields
      .filter((field) => field.name !== "Description")
      .concat({
        name: "Description",
        placeholder: "Description",
        required: true,
        value: action?.value ?? null,
      });

    return {
      fields,
    };
  }

  if (action.type === "inputChange.ingredients") {
    const fields = state.fields
      .filter((field) => field.name !== "Ingredients")
      .concat({
        name: "Ingredients",
        placeholder: "Ingredients",
        required: true,
        value: action?.value ?? null,
      });

    return {
      fields,
    };
  }

  if (action.type === "inputChange.instructions") {
    const fields = state.fields
      .filter((field) => field.name !== "Instructions")
      .concat({
        name: "Instructions",
        placeholder: "Instructions",
        required: true,
        value: action?.value ?? null,
      });

    return {
      fields,
    };
  }

  if (action.type === "inputChange.image") {
    const fields = state.fields
      .filter((field) => field.name !== "Image")
      .concat({
        name: "Image",
        placeholder: "Image",
        required: true,
        value: action?.value ?? null,
      });

    return {
      fields,
    };
  }

  if (action.type === "inputChange.url") {
    const fields = state.fields
      .filter((field) => field.name !== "Url")
      .concat({
        name: "Url",
        placeholder: "Url",
        required: true,
        value: action?.value ?? null,
      });

    return {
      fields,
    };
  }

  if (action.type === "inputChange.name") {
    const fields = state.fields
      .filter((field) => field.name !== "Name")
      .concat({
        name: "name",
        placeholder: "Name",
        required: true,
        value: action?.value ?? null,
      });

    return {
      fields,
    };
  }

  if (action.type === "formEvent.reset") {
    return initialState;
  }

  return state;
}
