const { prompt } = require('enquirer');
const { menuOptions } = require('../config/constants');
const store = require('../states/store');

const getMainMenuChoices = () => {
    let csvLoaded = store.getState().diagnostics.csvLoaded;
    if (csvLoaded) {
        return [
            menuOptions.FILTER_OPTION,
            menuOptions.EXPORT_OPTION,
            menuOptions.SUMMARY_OPTION,
            menuOptions.EXIT_OPTION
        ];
    } else {
        return [menuOptions.LOAD_OPTION, menuOptions.EXIT_OPTION];
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

module.exports = menuPrompt;
