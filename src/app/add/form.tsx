"use client";

import React, {
  LegacyRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Description from "./description";
import Name from "./name";
import Ingredients from "./ingredients";
import Image from "./image";
import Instructions from "./instructions";
import Url from "./url";
import Submit from "./submit";

import reducer from "./reducers";
import initialState from "./initialState";

export default function Form({ action }: any) {
  const formRef = useRef<LegacyRef<HTMLFormElement>>();
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validity = formState.fields.every((field) => {
      if (field?.required && !field?.value) {
        return false;
      }

      return true;
    });

    setIsValid(() => validity);
  }, [formState, isValid, setIsValid]);

  return (
    <form
      action={action}
      className="w-100 p-8"
      ref={formRef as LegacyRef<HTMLFormElement>}
      onSubmit={() => {
        dispatch({ type: "formEvent.reset" });
      }}
    >
      <div>
        <Name dispatch={dispatch} />
      </div>
      <div>
        <Ingredients dispatch={dispatch} />
      </div>
      <div>
        <Description dispatch={dispatch} />
      </div>
      <div>
        <Instructions dispatch={dispatch} />
      </div>
      <div>
        <Image dispatch={dispatch} />
      </div>
      <div>
        <Url dispatch={dispatch} />
      </div>
      <div className="flex justify-end">
        <Submit isFormValid={isValid} />
      </div>
    </form>
  );
}
