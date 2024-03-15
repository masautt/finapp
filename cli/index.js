const { prompt } = require('enquirer');
const getLogger = require('./config/logger.js');
const readCSV = require('./utils/csvHelper.js');
const constants = require("./config/constants.js");
const writeJSON = require('./utils/jsonHelper.js');

const store = require('./states/store.js');
const { filterPrompt } = require('./prompts/filterPrompts.js');
const { addTransactions, filterTransactions, selectTransactions } = require('./states/transactionsSlice.js');
require('dotenv').config();

let csvLoaded = false;
const menuOptions = {
    LOAD_OPTION_1: '1: Load Transactions CSV to Data Store',
    FILTER_OPTION_2: '2: Filter Transactions',
    EXPORT_OPTION_3: '3: Export Transactions',
    INQUIRE_OPTION_4: '4: Inquire Transactions',
    EXIT_OPTION_5: '5: Exit'
}
const logger = getLogger();

const mainMenu = async () => {
    const response = await prompt([
        {
            type: 'select',
            name: 'choice',
            message: 'Main Menu:',
            choices: getMainMenuChoices()
        }
    ]);


    switch (response.choice) {
        case menuOptions.LOAD_OPTION_1:
            let transactionsFromCSV = await readCSV(constants.transactions, logger);
            store.dispatch(addTransactions(transactionsFromCSV));
            csvLoaded = true; // Set the flag to true
            mainMenu();
            break;
        case menuOptions.FILTER_OPTION_2:
            if (csvLoaded) {
                let transactionsFromStore = store.getState().transactions.filtered
                await writeJSON(transactionsFromStore);
            } else {
                console.log("Option 1 must be executed first.");
            }
            mainMenu();
            break;
        case menuOptions.EXPORT_OPTION_3:
            if (csvLoaded) {
                console.log("Option 3 selected.");
            } else {
                console.log("Option 1 must be executed first.");
            }
            mainMenu();
            break;
        case menuOptions.INQUIRE_OPTION_4:
            if (csvLoaded) {
                console.log("Option 3 selected.");
            } else {
                console.log("Option 1 must be executed first.");
            }
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

// Function to get choices dynamically based on whether option 1 has been run
const getMainMenuChoices = () => {
    if (csvLoaded) {
        return [menuOptions.LOAD_OPTION_1, 
            menuOptions.FILTER_OPTION_2, 
            menuOptions.EXPORT_OPTION_3,
            menuOptions.INQUIRE_OPTION_4,
            menuOptions.EXIT_OPTION_5
        ];
    } else {
        return [menuOptions.LOAD_OPTION_1, menuOptions.EXIT_OPTION_5];
    }
};

// Start the main menu
mainMenu();
