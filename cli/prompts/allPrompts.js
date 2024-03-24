const exportPrompt = require('./exportPrompts');
const filterPrompt = require('./filterPrompts');
const summarizePrompt = require('./summarizePrompt');
const jsonPrompt = require('./jsonPrompts');
const menuPrompt = require('./menuPrompts');

const allPrompts = {
    exportPrompt,
    filterPrompt,
    summarizePrompt,
    jsonPrompt,
    menuPrompt
};

module.exports = allPrompts;