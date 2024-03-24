
const { handleLoadPath } = require('./paths/allPaths.js');
const { menuOptions, introMessage } = require("./config/constants.js");
const { summaryPrompt, filterPrompt, menuPrompt } = require('./prompts/allPrompts.js');
const { fetchCsvTransactions } = require('./helpers/allHelpers.js');
const { addTransactions, filterTransactions } = require('./states/transactionsSlice.js');
const { markCsvLoaded } = require('./states/diagnosticsSlice.js');
const store = require('./states/store.js');

require('dotenv').config();

console.clear();
console.log(introMessage);

const mainMenu = async () => {

    let choice = await menuPrompt();

    switch (choice) {
        case menuOptions.LOAD_OPTION:
            await handleLoadPath();

            console.clear();
            mainMenu();

            break;
        case menuOptions.FILTER_OPTION:
            let filters = await filterPrompt();

            store.dispatch(filterTransactions(filters));

            mainMenu();
            break;
        case menuOptions.EXPORT_OPTION:
            mainMenu();
            break;
        case menuOptions.SUMMARY_OPTION:
            await summaryPrompt();
            mainMenu();
            break;
        case menuOptions.EXIT_OPTION:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice. Please select again.");
            mainMenu();
    }
};
mainMenu();
