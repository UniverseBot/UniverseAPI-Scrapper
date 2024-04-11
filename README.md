# UNIVERSE API

Full API Implementation inside NodeJS Module

- More info at [`Website`](https://api.universebot.space)
- Documentation [`Website`](https://docs.universebot.space)
- Get **API TOKEN** here [`Register`](https://api.universebot.space/auth/login)
    - _Free trial **premium** for `3 days` for new user._
- And you can upgrade your api token to premium, you can see more details at [`UPGRADE`](https://api.universebot.space/dashboard/premium)

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
## CommonJs (CJS) syntax
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


# Feedback
If you have any feedback, please reach out to us at `support@universebot.space`