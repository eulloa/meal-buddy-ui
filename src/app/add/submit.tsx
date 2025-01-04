import { useFormStatus } from "react-dom";
import { ISubmit } from "./interfaces";

export default function Submit({ isFormValid }: ISubmit) {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-2 border p-2 disabled:opacity-25"
      disabled={!isFormValid || pending}
      type="submit"
    >
      Add Recipe
    </button>
  );
}
