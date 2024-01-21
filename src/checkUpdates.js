const got = require("got");

module.exports = async () => {
    try {
        const packageData = await got("https://registry.npmjs.com/@mgalacyber/universeapi").json();
        const currentVersion = require("../package.json").version;
        const latestVersion = packageData["dist-tags"].latest;

        if (currentVersion !== latestVersion) {
            console.log("\n\n");
            console.log("\x1b[32m" + "-----------------------------------------------------------");
            console.log("\x1b[32m" + "| @MGalaCyber/UniverseAPI                          - [] X |");
            console.log("\x1b[32m" + "-----------------------------------------------------------");
            console.log("\x1b[33m" + "|                The module is\x1b[31m out of date!\x1b[33m               |");
            console.log("\x1b[35m" + "|                 New version is available!               |");
            console.log("\x1b[34m" + `|                      ${currentVersion} --> ${latestVersion}                    |`);
            console.log("\x1b[36m" + "|                           Run                           |");
            console.log("\x1b[36m" + "|        npm install @mgalacyber/universeapi@latest       |");
            console.log("\x1b[36m" + "|                        to update                        |");
            console.log("\x1b[37m" + "|              View the full changelog here:              |");
            console.log("\x1b[31m" + "|  https://www.npmjs.com/package/@mgalacyber/universeapi  |");
            console.log("\x1b[32m" + "-----------------------------------------------------------\x1b[37m");
            console.log("\n\n");
        }
    } catch (error) {
        console.error("Error checking for updates:", error.message);
    }
};