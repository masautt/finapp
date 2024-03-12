import getLogger from './config/logger.js';
import readCSV from './utils/csvHelper.js';
import constants from "./config/constants.js";
import store from './states/store.js';
import { filterPrompt } from './prompts/filterPrompts.js';
import { addTransactions, fetchTransactions } from './states/transactionsSlice.js';
import 'dotenv/config';

(async () => {
  try {
    const logger = getLogger();
    let transactions = await readCSV(constants.transactions, logger);
    store.dispatch(addTransactions(transactions));
    
    let filters = await filterPrompt.run();

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
