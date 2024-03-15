const { prompt } = require('enquirer');
const { menuOptions, menuPrompt } = require('./prompts/mainPrompt.js');
const getLogger = require('./config/logger.js');
const readCSV = require('./utils/csvHelper.js');
const constants = require("./config/constants.js");
const writeJSON = require('./utils/jsonHelper.js');

const store = require('./states/store.js');
const { filterPrompt } = require('./prompts/filterPrompts.js');
const { addTransactions } = require('./states/transactionsSlice.js');
const { markCsvLoaded } = require('./states/diagnosticsSlice.js');
require('dotenv').config();

const logger = getLogger();

const mainMenu = async () => {
    let choice = await menuPrompt();
    switch (choice) {
        case menuOptions.LOAD_OPTION_1:
            // Load transactions to redux store
            let transactionsFromCSV = await readCSV(constants.transactions, logger);
            store.dispatch(addTransactions(transactionsFromCSV));

            // Mark csvLoaded as true to allow for other menu options
            store.dispatch(markCsvLoaded());
            const res = await prompt({
                type: 'confirm',
                name: 'createJSON',
                message: 'Would you like to create JSON objects for the React app?',
                initial: true
            });
            if (res.createJSON) {
                await writeJSON(transactionsFromCSV);
            }
            mainMenu();
            break;
        case menuOptions.FILTER_OPTION_2:
            let transactionsFromStore = store.getState().transactions.filtered
            let filters = await filterPrompt.run();
            let filteredTransactions = store.getState().transactions.filtered;
            let filteredTransactionsTotal = filteredTransactions.reduce((acc, cur) => {
                return acc + cur.amount;
            }, 0);
            console.log(`Counted ${filteredTransactions.length} ${filters.category} transactions totalling ${filteredTransactionsTotal} dollars`);
            mainMenu();
            break;
        case menuOptions.EXPORT_OPTION_3:
            mainMenu();
            break;
        case menuOptions.INQUIRE_OPTION_4:
            mainMenu();
            break;
        case menuOptions.EXIT_OPTION_5:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice. Please select again.");
            mainMenu();
    }
};
// Start the main menu
mainMenu();
