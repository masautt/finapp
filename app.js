import getLogger from './config/logger.js';
import readFileAsync from './utils/csvParser.js';
import 'dotenv/config';

(async () => {
  try {
    const logger = getLogger();
    const data = await readFileAsync(logger);

  } catch (error) {
    console.error('Error in main script:', error);
  }
})();