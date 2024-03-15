const { prompt } = require('enquirer');
const getLogger = require('./config/logger.js');
const readCSV = require('./utils/csvHelper.js');
const constants = require("./config/constants.js");
const writeJSON = require('./utils/jsonHelper.js');

const store = require('./states/store.js');
const { filterPrompt } = require('./prompts/filterPrompts.js');
const { addTransactions, filterTransactions, selectTransactions } = require('./states/transactionsSlice.js');
require('dotenv').config();

const mainMenu = async () => {
    const response = await prompt([
        {
            type: 'select',
            name: 'choice',
            message: 'Main Menu:',
            choices: [
                '1:',
                'Option 2',
                'Option 3',
                'Exit'
            ]
        }
    ]);

    switch (response.choice) {
        case '1:':
            const logger = getLogger();
            let transactionsFromCSV = await readCSV(constants.transactions, logger);
            store.dispatch(addTransactions(transactionsFromCSV));
            mainMenu();
            break;
        case 'Option 2':
            let transactionsFromStore = store.getState().transactions.filtered
            await writeJSON(transactionsFromStore);
            mainMenu();
            break;
        case 'Option 3':
            console.log("Option 3 selected.");
            mainMenu();
            break;
        case 'Exit':
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice. Please select again.");
            mainMenu();
    }
};

// Start the main menu
mainMenu();
