import type { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@ignite-ui-nathallye/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
  decorators: [ // decorators: forma de customizar a view que mostra o componente no storybook, com isso, podemos colocar outros elementos na view sem ser o filho do componente (children - via args: {children: ""})
    (Story) => { // essas funções recebe como parâmetro o Story - Story: é basicamente uma função que vai renderizar o componente TextInput
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    }
  ]
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your name"
  }
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
    placeholder: "your-username"
  }
};
