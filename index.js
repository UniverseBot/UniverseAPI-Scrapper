// Check update
import("update-notifier").then(({ default: updateNotifier }) => {
    const notifier = updateNotifier({ pkg: require("./package.json") });
    if (notifier.update) notifier.notify({ boxenOptions: {borderColor: "green"} });
});

// Import api
module.exports = require("./src/main");