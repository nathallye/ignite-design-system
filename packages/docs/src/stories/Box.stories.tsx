import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@ignite-ui-nathallye/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Box Element</Text> {/*Utilizando o componente Text criado dentro no projeto react*/}
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    }
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
