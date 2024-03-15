const { menuOptions, menuPrompt, introMessage } = require('./prompts/mainPrompt.js');
const getLogger = require('./config/logger.js');
const readCSV = require('./utils/csvHelper.js');
const constants = require("./config/constants.js");
const writeJSON = require('./utils/jsonHelper.js');
const { printTransactionsTable, printTransactionStatisticsTable } = require('./utils/tableHelper.js');
const store = require('./states/store.js');
const { filterPrompt } = require('./prompts/filterPrompts.js');
const { addTransactions } = require('./states/transactionsSlice.js');
const { markCsvLoaded } = require('./states/diagnosticsSlice.js');
const { jsonPrompt } = require('./prompts/jsonPrompt.js');
const { exportFilteredPrompt } = require('./prompts/exportPrompt.js');
const { filterTransactions } = require('./states/transactionsSlice.js');

require('dotenv').config();

const logger = getLogger();

console.clear();
console.log(introMessage);

const mainMenu = async () => {

    let choice = await menuPrompt();

    switch (choice) {
        case menuOptions.LOAD_OPTION_1:
            // Load transactions to redux store
            let transactionsFromCSV = await readCSV(constants.transactions, logger);
            store.dispatch(addTransactions(transactionsFromCSV));

            // Mark csvLoaded as true to allow for other menu options
            store.dispatch(markCsvLoaded());

            // Prompt for JSON creation
            const createJSON = await jsonPrompt();
            if (createJSON) await writeJSON(transactionsFromCSV);

            mainMenu();

            break;
        case menuOptions.FILTER_OPTION_2:
            // Prompt for filters
            let filters = await filterPrompt();

            // Apply fitlers and fetch from store
            store.dispatch(filterTransactions(filters));
            let filteredTransactions = store.getState().transactions.filtered1;

            printTransactionsTable(filteredTransactions);
            printTransactionStatisticsTable(filteredTransactions);
            let filteredTransactionsTotal = filteredTransactions.reduce((acc, cur) => {
                return acc + cur.amount;
            }, 0);
            const exportFiltered = await exportFilteredPrompt();
            if (exportFiltered) {
                console.log("Writing..");
            }
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
