import { ComponentProps, ElementRef, forwardRef } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

// forwardRef -> para recebermos por parametro a ref o componente
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({ prefix, ...props }: TextInputProps, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  );
});

TextInput.displayName = "TextInput";
