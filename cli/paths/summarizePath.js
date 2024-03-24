const { summarizePrompt } = require('../prompts/allPrompts');

const handleSummarizePath = async () => {
    await summarizePrompt();
}

module.exports = handleSummarizePath;