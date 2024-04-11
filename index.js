// Check Update
const packageNotifier = require("@mgalacyber/package-notifier");
const packageFile = require("./package.json");
packageNotifier(packageFile);

// Import api
module.exports = require("./src/main");