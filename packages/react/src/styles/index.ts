import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens";

export const {
  theme,
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme
} = createStitches({
  themeMap: {
    ...defaultThemeMap, // importando o map padrão do stitches, para não sobrescrever
    height: "space", // informando os maps de tokens que iremos utilizar para essas propriedades
    width: "space" // informando os maps de tokens que iremos utilizar para essas propriedades
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});
