import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ "--steps-size": size }}> {/*--steps-size - variável que criamos no css que recebe o size das props*/}
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => { {/*Array.from: Criando array com o tamanho(length) do size recebido via props; em seguiga, percorrendo esse array com o map é renderizado o componente Step de acordo com o seu comprimento*/}
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}
