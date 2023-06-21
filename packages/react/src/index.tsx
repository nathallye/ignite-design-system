import { ComponentProps } from "react";
import { styled } from "./styles";

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite300",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "bold",
  color: "$white",

  variants: { // configuração de variantes de estilo do Stitches
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      big: {
        fontSize: 16,
        padding: "$3 $6"
      }
    }
  },

  defaultVariants: { // configuração da variante padrão
    size: "small"
  }
});

export type ButtonProps = ComponentProps<typeof Button>; // extrai as propriedades nativas que o componente pode receber
