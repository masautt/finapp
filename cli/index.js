const getLogger = require('../shared/config/logger.js');
const readCSV = require('../shared/utils/csvHelper.js');
const constants = require("../shared/config/constants.js");
const store = require('../shared/states/store.js');
const { filterPrompt } = require('./prompts/filterPrompts.js');
const { addTransactions, fetchTransactions } = require('../shared/states/transactionsSlice.js');
require('dotenv').config();

(async () => {
  try {
    const logger = getLogger();
    let transactions = await readCSV(constants.transactions, logger);
    store.dispatch(addTransactions(transactions));
    
    let filters = await filterPrompt.run();

    store.dispatch(fetchTransactions(filters));
    let filteredTransactions = store.getState().transactions.filteredData;    
  } catch (error) {
    console.error('Error in main script:', error);
  }
})();
