import { IState } from "./interfaces";

const initialState: IState = {
  fields: [
    {
      name: "Name",
      placeholder: "Name",
      required: true,
      value: "",
    },
    {
      name: "Description",
      placeholder: "Description",
      required: true,
      value: "",
    },
    {
      name: "Ingredients",
      placeholder: "Ingredients",
      required: true,
      value: "",
    },
    {
      name: "Instructions",
      placeholder: "Instructions",
      required: true,
      value: "",
    },
    {
      name: "Url",
      placeholder: "Url",
      required: true,
      value: "",
    },
    {
      name: "Image",
      placeholder: "Image",
      required: true,
      value: "",
    },
  ],
};

export default initialState;
