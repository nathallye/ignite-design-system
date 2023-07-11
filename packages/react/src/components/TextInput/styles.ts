import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  backgroundColor: "$gray900",
  borderRadius: "$sm",
  border: "2px solid $gray900",
  boxSizing: "border-box",

  variants: {
    size: {
      sm: {
        padding: "$2 $3"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },

  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  },

  defaultVariants: {
    size: "md"
  }
});

export const Prefix = styled("span", {
  color: "$gray400",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular"
});

export const Input = styled("input", {
  background: "transparent",
  border: 0,

  color: "$white",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "regular",

  width: "100%",

  "&:focus": {
    outline: 0
  },

  "&:disabled": {
    cursor: "not-allowed"
  },

  "&::placeholder": {
    color: "$gray400"
  }
});
