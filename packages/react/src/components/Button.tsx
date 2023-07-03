import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset", // remove todos as estilizações que vem por padrão no elemento

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$sm",

  gap: "$2",
  minWidth: 120,
  padding: "0 $4",

  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  boxSizing: "border-box",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4"
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        background: "$ignite500",
        color: "$white",

        "&:not(:disabled):hover": {
          background: "$ignite300"
        },

        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },

      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white"
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },

      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white"
        },

        "&:disabled": {
          color: "$gray600"
        },
      }
    },

    size: {
      sm: {
        height: 38
      },

      md: {
        height: 46
      }
    }
  },

  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
