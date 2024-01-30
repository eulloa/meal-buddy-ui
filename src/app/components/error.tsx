"use client";

import * as stylex from "@stylexjs/stylex";
import { ErrorStyles } from "../styles/errorStyles";
import { TError } from "@/types";

export default function Error({ error }: TError) {
  return (
    <div className="error" {...stylex.props(ErrorStyles.bg)}>
      <h1 {...stylex.props(ErrorStyles.h1)}>{error}</h1>
    </div>
  );
}
