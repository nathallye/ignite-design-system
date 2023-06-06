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

- Vamos criar a estrutura de pastas `packeges/tokens` e dentro desse diretório vamos inicializar o projeto com o comando `npm init -y`; instalar o TypeScript como uma dependência de desenvolvimento com o comando seguinte `npm i -D typescript`e inicializar `npx tsc --int`.

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

- Dentro do diretório `packages/tokens` vamos instalar o TSUP como dependência de desenvolvimento, com o comando seguinte:

``` 
npm i tsup -D
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
  "license": "ISC",
  "devDependencies": {
    "tsup": "^6.7.0",
    "typescript": "^5.1.3"
  }
}
```
