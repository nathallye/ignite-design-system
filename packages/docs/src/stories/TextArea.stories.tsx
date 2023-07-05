import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [ // decorators: forma de customizar a view que mostra o componente no storybook, com isso, podemos colocar outros elementos na view sem ser o filho do componente (children - via args: {children: ""})
    (Story) => { // essas funções recebe como parâmetro o Story - Story: é basicamente uma função que vai renderizar o componente TextInput
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    }
  ]
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations..."
  }
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
};
