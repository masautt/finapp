const { prompt } = require('enquirer');

const exportFilteredPrompt = async () => {
    const res = await prompt({
        type: 'confirm',
        name: 'exportFiltered',
        message: 'Would you like to export these transactions to a csv?',
        initial: true
    });
    return res.createJSON;
};

module.exports = { exportFilteredPrompt };
