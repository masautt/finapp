import getLogger from './config/logger.js';
import readCSV from './utils/csvParser.js';
import constants from "./config/constants.js";
import store from './states/store.js';
import { addTransactions } from './states/transactionsSlice.js';
import mainMenu from "./menus/main.js";
import 'dotenv/config';

(async () => {
  try {
    const logger = getLogger();
    let transactions = await readCSV(constants.transactions, logger);

    store.dispatch(addTransactions(transactions));
    mainMenu();
  } catch (error) {
    console.error('Error in main script:', error);
  }
})();
