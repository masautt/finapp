import path from 'path';
import { parseCSV } from '../utils/csvParser.js';
import { getLogger } from './logger.js';

export const loadDataFromCSV = () => {
    const logger = getLogger();
    const csvPath = path.join(process.env.CSV_FOLDER, process.env.CSV_FILE);
    parseCSV(csvPath, logger);
};
