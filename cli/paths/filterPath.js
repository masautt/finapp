const { filterPrompt } = require('../prompts/allPrompts');
const { filterTransactions } = require('../states/transactionsSlice.js');

const handleFilterPath = async () => {
    let filters = await filterPrompt();

    store.dispatch(filterTransactions(filters));
}

module.exports = handleFilterPath;