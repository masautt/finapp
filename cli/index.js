const getLogger = require('../src/shared/config/logger.js');
const readCSV = require('./utils/csvHelper.js');
const writeJSON = require('./utils/jsonHelper.js');
const constants = require("../src/shared/config/constants.js");

const store = require('../src/shared/states/store.js');
const { filterPrompt } = require('./prompts/filterPrompts.js');
const { addTransactions, fetchTransactions } = require('../src/shared/states/transactionsSlice.js');
require('dotenv').config();

(async () => {
  try {
    const logger = getLogger();
    let transactions = await readCSV(constants.transactions, logger);
    await writeJSON(transactions);
    

    store.dispatch(addTransactions(transactions));
    
    let filters =  await filterPrompt.run();

    store.dispatch(fetchTransactions(filters));
    let filteredTransactions = store.getState().transactions.filteredData;
    let filteredTransactionsTotal = filteredTransactions.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
    console.log(`Counted ${filteredTransactions.length} ${filters.category} transactions totalling ${filteredTransactionsTotal} dollars`);
    
  } catch (error) {
    console.error('Error in main script:', error);
  }
})();
