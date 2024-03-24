
const { handleLoadPath, handleFilterPath, handleSummarizePath } = require('./paths/allPaths.js');
const { menuOptions, introMessage } = require("./config/constants.js");
const { menuPrompt } = require('./prompts/allPrompts.js');

require('dotenv').config();

const mainMenu = async () => {
    console.clear();
    console.log(introMessage);
    let choice = await menuPrompt();

    switch (choice) {
        case menuOptions.LOAD_OPTION:
            await handleLoadPath();
            mainMenu();
            break;
        case menuOptions.FILTER_OPTION:
            await handleFilterPath();
            mainMenu();
            break;
        case menuOptions.EXPORT_OPTION:
            mainMenu();
            break;
        case menuOptions.SUMMARY_OPTION:
            await handleSummarizePath();
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
