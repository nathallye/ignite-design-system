# Design System - Ignite

## O que é um Design System?

O Design System é um conjunto de bibliotecas de design, conteúdo e codificação de uma empresa, com diretrizes de estilo e componentes codificados que são reutilizáveis e documentados, para uso em conjunto na criação de interfaces de produtos e sistemas. O Design System é utilizado para padronizar um ou mais produtos, sejam eles web, mobile ou app.

## UI Kit

É uma biblioteca de componentes (também chamada de component library) de um site ou produto (como um aplicativo, sistema ou e-commerce), usada como referência para a confecção de um produto digital, ajudando na padronização da etapa de design.

## Componentes que iremos criar dentro do Design System

- Text
- Heading
- Box
- Button
- TextInput
- TextArea
- Checkbox
- Avatar
- MultiStep

### Criando pacote de tokens (cores, fontes, espaçamento...)

- Utilizando a estrutura mais simples para poder reaproveitar em qualquer tecnologia depois.

- Vamos criar a estrutura de pastas `packeges/tokens` e dentro desse diretório vamos inicializar o projeto com o comando `npm init -y`; instalar o `TypeScript` como uma dependência de desenvolvimento com o comando seguinte `npm i -D typescript` e inicializar `npx tsc --int`.

- Feito isso, no diretório `packeges/tokens` vamos criar a pasta `src` e nela criaremos o arquivo `colors` que irá conter todas as cores compartilhadas nas aplicações do ignite:

``` TS
export const colors = {
  white: "#FFF",
  black: "#000",

  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",

  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
} as const;
```

- Mesmo iremos fazer para os demais tokens.

### Build do pacote com TSUP

- Dentro do diretório `packages/tokens` vamos instalar o `TSUP` como dependência de desenvolvimento, com o comando seguinte:

```
> npm i -D tsup
```

- Em seguida, no arquivo `packege.json` vamos adicionar os scripts `build` e `dev` para que ele converta nosso código de TS para JS:

``` JSON
{
  "name": "@ignite-ui/tokens",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```

### Configurando Monorepo

- No diretório raiz da aplicação também vamos inicializar o projeto com o comando `npm init -y` (para criar um `package.json` global do design system). Mas como não iremos utilizar esse arquivo para publicar no npm, podemos apagar seu conteúdo e adicionar as configurações seguintes:

``` JSON
{
  "private": true,
  "workspaces": [
    "packages/*" // pasta que contém os repositórios do monorepo
  ]
}
```

- Em seguida, devemos adicionar a dependência de um pacote com outro. Exemplo, no arquivo `package.json` do pacote `react` iremos colocar como dependência o pacote `@ignite-ui/tokens`:

``` JSON
{
  "name": "@ignite-ui/react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@ignite-ui/tokens": "*",
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```

- Feito isso, vamos alterar a localização dos arquivos que dentro do `package.json` dos pacotes `tokens` e `react`:

``` JSON
{
  "name": "@ignite-ui/tokens",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```

``` JSON
{
  "name": "@ignite-ui/react",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@ignite-ui/tokens": "*",
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```

### Configuração do TypeScript

- Vamos agora criar um pacote para a configuração do TypeScript, que será compartilhada entre vários pacotes do nosso monorepo. Para isso, no diretório `packages` vamos criar uma pasta chamada `ts-config` e dentro dela também vamos inicializar o projeto com o comando `npm init -y`.

- Em seguida, no arquivo `package.json` criado vamos fazer as alterações seguintes:

``` JSON
{
  "name": "@ignite-ui/ts-config",
  "version": "1.0.0",
  "license": "MIT",
  "private": true
}
```

- Feito isso, vamos criar um arquivo chamado `base.json` que irá conter as configurações do TypeScript (configurações para pacotes que não usam react):

``` JSON
{
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "node",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true
  },
  "exclude": ["node_modules"]
}
```

- E um arquivo chamado `react.json` que irá conter as configurações do React (configurações para pacotes que usam react):

``` JSON
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["dom", "ES2015"],
    "module": "ESNext",
    "target": "es6"
  }
}
```

- Em seguida, devemos adicionar a dependência de um pacote com outro. Exemplo, no arquivo `package.json` do pacote `react` iremos colocar como dependência o pacote `@ignite-ui/ts-config` (o mesmo deve ser feito no `package.json` do pacote `tokens`):

``` JSON
{
  "name": "@ignite-ui/react",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@ignite-ui/tokens": "*",
    "@ignite-ui/ts-config": "*",
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```

- Em seguida, no arquivo `tsconfig.json` dos pacotes iremos informar a configuração que será utilizada do `ts-config` (se é `base.json` ou `react.json`):

``` JSON
{
  "extends": "@ignite-ui/ts-config/react.json",
  "include": ["src"]
}
```

### Configuração do ESLint

- Vamos agora configurar um pacote que irá conter todas as configurações do ESLint que serão usadas no nosso monorepo. Para isso, no diretório `packages` vamos criar uma pasta chamada `eslint-config` e dentro dela também vamos inicializar o projeto com o comando `npm init -y`.

- Em seguida, no arquivo `package.json` criado vamos fazer as alterações seguintes:

``` JSON
{
  "name": "@ignite-ui/eslint-config",
  "license": "MIT",
  "private": true,
  "main": "index.js"
}
```

- Dentro do diretório `packages/eslint-config` vamos instalar o `ESLint` e o pacote `@rocketseat/eslint-config` como dependências de desenvolvimento, com o comando seguinte:

```
> npm i -D eslint @rocketseat/eslint-config
```

- Feito isso, vamos criar um arquivo chamado `index.js` que irá conter as configurações do ESLint:

``` JS
module.exports = {
  extends: ["@rocketseat/eslint-config/react"]
}
```

- Em seguida, devemos adicionar a dependência de um pacote com outro. Exemplo, no arquivo `package.json` do pacote `react` iremos colocar como dependência o pacote `@ignite-ui/eslint-config` e o script de lint (o mesmo deve ser feito no `package.json` do pacote `tokens`):

``` JSON
{
  "name": "@ignite-ui/react",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch",
    "lint": "eslint src/**/*.ts* --fix"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@ignite-ui/tokens": "*",
    "@ignite-ui/ts-config": "*",
    "@ignite-ui/eslint-config": "*",
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```

- Por fim, iremos criar um arquivo chamado `.eslintrc.json` dentro de cada pacote que irá conter a configuração seguinte:

``` JSON
{
  "extends": "@ignite-ui/eslint-config"
}
```

### Configurando pacote do React - ultizando os tokens do pacote tokens

- Primeiramente, no diretório `packeges/react` vamos instalar o `React` e seus types como uma dependência de desenvolvimento com o comando seguinte:

```
> npm i -D react @types/react @types/react-dom
```

- Em seguida, nos scripts do arquivo `package.json` vamos informar que no processo de build não é necessário se preocupar com a importação do react, pois ela é uma importação externa (`--external react`), ou seja, o react será importado da aplicação que está utilizando esse pacote:

``` JSON
{
  "name": "@ignite-ui/react",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup src/index.tsx --format esm,cjs --dts --external react",
    "dev": "tsup src/index.tsx --format esm,cjs --dts --external react --watch",
    "lint": "eslint src/**/*.ts* --fix"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@ignite-ui/eslint-config": "*",
    "@ignite-ui/tokens": "*",
    "@ignite-ui/ts-config": "*",
    "@types/react": "^18.2.11",
    "@types/react-dom": "^18.2.4",
    "react": "^18.2.0",
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```

- Feito isso, já conseguimos criar o nosso primeiro componente:

``` TSX
import { colors } from "@ignite-ui/tokens";

export function App() {
  return <h1 style={{ color: colors.ignite300 }}>Hello World</h1>
}
```

### Configurando Stitches no pacote React

Ferramenta CSS-in-JS com foco em performance e experiencia de desenvolvimento que utilizaremos para estilizar a nossa aplicação. Para instalar ele vamos rodar o comando seguinte `npm i @stitches/react`;

- Para configurar Stitches, iremos criar um arquivo `styles/index.ts` (`.js` funciona também) e importar a função `createStitches`:

``` TS
import { createStitches } from "@stitches/react";
```

Esta função recebe um objeto de configuração:

- `theme`: defina seu tema de design , que mapeia para as propriedades CSS.
- `media`: Definir pontos de interrupção responsivos reutilizáveis .
- `utils`: crie utilitários personalizados para melhorar sua experiência de desenvolvedor.
- `prefix`: Prefixe nomes de classe e variáveis ​​CSS para evitar conflitos.
- `themeMap`: Defina o mapeamento personalizado de propriedades CSS para tokens de tema.

E retorna todas as funções disponíveis acima:

``` TS
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
```

- Deste ponto em diante, nos componentes, iremos importar `styled` e outras funções do arquivo `styles/index.ts`(mas como não precisa especificar o index.ts - vamos importar direto da pasta styles):

``` TSX
import { styled } from "./styles"

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  padding: "$4"
})

export const App = () => {
  return <Button>Hello World</Button>
};

```

### Criando app em Storybook

- Vamos agora configurar o StoryBook (o Storybook aplicação que permite documentar e testar componentes do front-end) e integrar ele com os plugins do vite e React e já visualizar o funcionamento do Storybook no navegador. Para isso, no diretório `packages` vamos criar a pasta `docs` e dentro dela rodar o comando seguinte:

```
npx sb init --builder @storybook/builder-vite --type react --use-npm
```

- Além das pacotes padrões que o storybook já instala, vamos instalar outras dependências que serão necessárias nesse projeto, com os comandos seguintes:

```
> npm i vite @vitejs/plugin-react -D
> npm i react react-dom
```

- Em seguida, vamos criar o arquivo `vite.config.ts` que irá conter as configurações do vite:

``` JS
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
```

- Feito isso, vamos fazer alguns ajustes no arquivo `packages/docs/package.json` de modo que fique no padrão dos demais pacotes:

``` JSON
{
  "name": "@ignite-ui/docs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "storybook dev -p 6006",
    "build": "storybook build"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@storybook/addon-essentials": "^7.0.20",
    "@storybook/addon-interactions": "^7.0.20",
    "@storybook/addon-links": "^7.0.20",
    "@storybook/blocks": "^7.0.20",
    "@storybook/react": "^7.0.20",
    "@storybook/react-vite": "^7.0.20",
    "@storybook/testing-library": "^0.0.14-next.2",
    "@vitejs/plugin-react": "^4.0.0",
    "prop-types": "^15.8.1",
    "storybook": "^7.0.20",
    "vite": "^4.3.9"
  },
  "dependencies": {
    "@ignite-ui/react": "*",
    "@ignite-ui/tokens": "*",
    "@ignite-ui/eslint-config": "*",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```
