import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@ignite-ui/react";

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
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
