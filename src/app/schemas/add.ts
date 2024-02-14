import * as yup from "yup";

const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export const addSchema = () => yup.object().shape({
   name: yup.string().required().min(2).max(100),
   description: yup.string().required().min(2).max(100),
   url: yup.string().matches(re).required()
});
