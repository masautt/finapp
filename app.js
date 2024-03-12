import getLogger from './config/logger.js';
import readCSV from './utils/csvParser.js';
import constants from "./config/constants.js";
import store from './states/store.js';
import { addTransactions, fetchTransactions } from './states/transactionsSlice.js';
import 'dotenv/config';

(async () => {
  try {
    const logger = getLogger();
    let transactions = await readCSV(constants.transactions, logger);
    store.dispatch(addTransactions(transactions));

    const filters = { category: "Life", subCategory: "Haircut"}
    
    store.dispatch(fetchTransactions(filters));
    const filteredTransactions = store.getState().transactions.filteredData;

    console.log(filteredTransactions);
  } catch (error) {
    console.error('Error in main script:', error);
  }
})();
