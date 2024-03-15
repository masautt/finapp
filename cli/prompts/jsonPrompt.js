const { prompt } = require('enquirer');

const jsonPrompt = async () => {
    const res = await prompt({
        type: 'confirm',
        name: 'createJSON',
        message: 'Would you like to create JSON objects for the React app?',
        initial: true
    });
    return res.createJSON;
};

module.exports = { jsonPrompt };
