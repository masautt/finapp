const exportPrompt = require('./exportPrompts');
const filterPrompt = require('./filterPrompts');
const summaryPrompt = require('./summaryPrompts');
const jsonPrompt = require('./jsonPrompts');
const menuPrompt = require('./menuPrompts');

const allPrompts = {
    exportPrompt,
    filterPrompt,
    summaryPrompt,
    jsonPrompt,
    menuPrompt
};

module.exports = allPrompts;