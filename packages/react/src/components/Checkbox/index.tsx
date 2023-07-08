import { Check } from "phosphor-react";
import { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild> {/*Exibe ou não o conteúdo com base na seleção - asChild não cria um novo elemento (ex.: div), só repassa suas informações a  serem exibidas para o filho*/}
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}

Checkbox.displayName = "Checkbox";
