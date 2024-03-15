const { prompt } = require('enquirer');
const store = require('../states/store');

const menuOptions = {
    LOAD_OPTION_1: '1: Load Transactions CSV to Data Store',
    FILTER_OPTION_2: '2: Filter Transactions',
    EXPORT_OPTION_3: '3: Export Transactions',
    INQUIRE_OPTION_4: '4: Inquire Transactions',
    EXIT_OPTION_5: '5: Exit'
}

const getMainMenuChoices = () => {
    let csvLoaded = store.getState().diagnostics.csvLoaded;
    if (csvLoaded) {
        return [
            menuOptions.FILTER_OPTION_2,
            menuOptions.EXPORT_OPTION_3,
            menuOptions.INQUIRE_OPTION_4,
            menuOptions.EXIT_OPTION_5
        ];
    } else {
        return [menuOptions.LOAD_OPTION_1, menuOptions.EXIT_OPTION_5];
    }
};

const menuPrompt = async () => {
    const response = await prompt({
        type: 'select',
        name: 'choice',
        message: 'Main Menu:',
        choices: getMainMenuChoices()
    });

    return response.choice;
};

module.exports = { menuPrompt, menuOptions };
