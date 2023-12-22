module.exports = require("./src/main");

// Check update
const { default: updateNotifier } = require("update-notifier");
const notifier = updateNotifier({ pkg: require("./package.json") });
if (notifier.update) notifier.notify({ boxenOptions: {borderColor: "green"} });