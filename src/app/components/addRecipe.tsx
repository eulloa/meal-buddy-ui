"use client";

import { Field, FieldArray, Form, Formik, FormikHelpers } from "formik";
import { TRecipe } from "@/types";
import { useEffect, useRef, useState } from "react";

import { addSchema } from "@/schemas";

type AddRecipeInitialValues = Omit<TRecipe, "error" | "id">;

const initialValues: AddRecipeInitialValues = {
  name: "",
  description: "",
  ingredients: [],
  instructions: [],
  url: "",
};

const FieldError = ({ error }: { error: string }) => (
  <span className="text-error text-xs">{error}</span>
);

export const AddRecipe = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [addDescriptionField, setAddDescriptionField] =
    useState<boolean>(false);

  const toggleDescription = () => {
    setAddDescriptionField((prev) => !prev);
  };

  const showAddDescriptionField = () => {
    setAddDescriptionField(true);
  };

  const handleSubmit = (
    values: AddRecipeInitialValues,
    actions: FormikHelpers<AddRecipeInitialValues>
  ) => {
    console.log(values);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 2500);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addSchema}
        validateOnMount
      >
        {({ errors, isSubmitting, isValid, touched, values }) => {
          // console.log("values: ", values);

          return (
            <Form className={`${isSubmitting ? "opacity-50" : ""}`}>
              <div className="mb-10">
                <label className="block" htmlFor="name">
                  Name
                </label>
                <Field
                  innerRef={inputRef}
                  className="w-full p-2"
                  name="name"
                  placeholder=""
                />
                {touched.name && errors.name ? (
                  <FieldError error={errors.name} />
                ) : null}
              </div>
              <div className="mb-10">
                <label className="block" htmlFor="description">
                  Description
                </label>
                <Field
                  className="w-full p-2"
                  name="description"
                  placeholder=""
                />
                {touched.description && errors.description ? (
                  <FieldError error={errors.description} />
                ) : null}
              </div>
              <div className="mb-10">
                <label className="block" htmlFor="ingredients">
                  Ingredients
                </label>
                <FieldArray
                  name="ingredients"
                  render={(ingredientsHelper) => (
                    <div>
                      {values.ingredients.length === 0 ? (
                        <button
                          type="button"
                          onClick={() => {
                            ingredientsHelper.push("");
                            toggleDescription();
                          }}
                        >
                          Add an ingredient
                        </button>
                      ) : null}
                      {values.ingredients.map((ingredient, index) => {
                        console.log(`index: ${index}`);

                        return (
                          <div key={index}>
                            {addDescriptionField && (
                              <Field
                                className="w-full p-2"
                                name={`ingredients.${index}`}
                              />
                            )}
                            <button
                              type="button"
                              onClick={() => ingredientsHelper.remove(index)}
                            >
                              -
                            </button>
                            <button
                              className="disabled:opacity-50"
                              type="button"
                              onClick={() => {
                                ingredientsHelper.insert(index, "");
                                showAddDescriptionField();
                              }}
                              disabled={values.ingredients[index].length === 0}
                            >
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                />
              </div>
              <div className="mb-10">
                <label className="block" htmlFor="instructions">
                  Instructions
                </label>
                <Field
                  className="w-full p-2"
                  name="instructions"
                  placeholder=""
                />
              </div>
              <div className="mb-10">
                <label className="block" htmlFor="url">
                  Url
                </label>
                <Field className="w-full p-2" name="url" placeholder="" />
                {touched.url && errors.url ? (
                  <FieldError error="Please enter a valid url" />
                ) : null}
              </div>
              <button
                className="disabled:opacity-50"
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                Add recipe
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
