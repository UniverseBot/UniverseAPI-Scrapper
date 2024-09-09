<p align="center">
    <a href="https://nodei.co/npm/@mgalacyber/universeapi">
        <img src="https://nodei.co/npm/@mgalacyber/universeapi.png">
    </a>
</p>

# UNIVERSE API

Full API Implementation inside NodeJS Module

- More info at [`Website`](https://api.universebot.space)
- Documentation [`Website`](https://docs.universebot.space)
- Get **API TOKEN** here [`Register`](https://api.universebot.space/register)

## Installation
npm:
```bash
$ npm install @mgalacyber/universeapi
```
yarn:
```bash
$ yarn add @mgalacyber/universeapi
```
pnpm:
```bash
$ pnpm add @mgalacyber/universeapi
```

## Simple to Use
## CommonJS (CJS) syntax
```js
const { UniverseClient } = require("@mgalacyber/universeapi");
const uAPI = new UniverseClient("API-TOKEN");

// Example of an API call
uAPI.V1.AI.OpenAI.GPT.Text({
    model: "gpt4", // Type of model used
    version: 1, // Model version of rest api
    prompt: "What is Galaxy Universe?" // Enter Your prompt here

}).then((result) => console.log(result));
```
## ECMAScript Modules (ESM) syntax
```ts
import { UniverseClient } from "@mgalacyber/universeapi";
const uAPI = new UniverseClient("API-TOKEN");

// Example of an API call
uAPI.V1.AI.OpenAI.GPT.Text({
    model: "gpt4", // Type of model used
    version: 1, // Model version of rest api
    prompt: "What is Galaxy Universe?" // Enter Your prompt here

}).then((result) => console.log(result));
```


# Bugs, Glitches and Issues
If you encounter any problems feel free to open an issue in our
- [GitHub Repository](https://github.com/UniverseBot/UniverseAPI-Wrapper/issues)
- [Telegram Group](https://t.me/GalaxyUniverseOfficial)
- [Discord Server](https://discord.gg/uESnRWjEwv)