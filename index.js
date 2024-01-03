// Check update
import("update-notifier").then(({ default: updateNotifier }) => {
    const notifier = updateNotifier({ pkg: require("./package.json") });
    notifier.check();
    notifier.notify({ boxenOptions: { borderColor: "green" } });

}).catch((error) => {
    console.error("Error checking for updates:", error);
});

// Import api
module.exports = require("./src/main");