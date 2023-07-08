import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  border: "2px solid $gray900",
  boxSizing: "border-box",

  padding: "$3 $4",
  minHeight: 80,

  color: "$white",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",

  resize: "vertical",

  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },

  "&:placeholder": {
    color: "$gray400"
  }
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = "TextArea";
