import getLogger from './config/logger.js';
import readCSV from './utils/csvParser.js';
import 'dotenv/config';
import store from './states/store.js';
import { addTransactions } from './states/transactionsSlice.js';

const TRANSACTIONS = "TRANSACTIONS";

(async () => {
  try {
    const logger = getLogger();
    let transactions = await readCSV(TRANSACTIONS, logger);
    console.log(transactions[0]);

    store.dispatch(addTransactions(transactions));

  } catch (error) {
    console.error('Error in main script:', error);
  }
})();
