import Papa from 'papaparse';

export const parseCSV = (filePath, logger) => {
    try {
        Papa.parse(filePath, {
            header: true,
            dynamicTyping: true,
            complete(results) {
                logger.info('Parsed CSV data:', results.data);
            },
            error(error) {
                logger.error('Error parsing CSV:', error.message);
            }
        });
    } catch (error) {
        logger.error('Error parsing CSV:', error.message);
    }
};
