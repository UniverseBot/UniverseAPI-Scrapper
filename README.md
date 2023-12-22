# UNIVERSE API

Full API Implementation inside NodeJS Module

- More info at [`Website`](https://api.universebot.space)
- Get **API TOKEN** here [`Register`](https://api.universebot.space/auth)
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

## Simple to Use
## CommonJs (CJS) syntax
```js
const UniverseAPI = require("@mgalacyber/universeapi");
```
## ECMAScript Modules (ESM) syntax
```ts
import UniverseAPI from "@mgalacyber/universeapi";
```

## Example
```js
const uAPI = new UniverseAPI("API-TOKEN");

// How to call the API
uAPI.[version].[features].[category](parameter)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error.message);
    });

// Example of an API call
uAPI.V1.Creator.Photooxy.Flaming("Universe+API")
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error.message);
    });
```

# Feedback
If you have any feedback, please reach out to us at support@universebot.space