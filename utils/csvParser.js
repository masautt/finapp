import fs from 'fs';
import csv from 'csv-parser';
import path from "path";

const csvParser = async (logger) => {
    const fileName = process.env.CSV_FILE;
    const fileFolder = process.env.CSV_FOLDER;
    const filePath = path.join(fileFolder, fileName);

    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                logger.info(`Read ${results.length} records from ${fileName}`);
                resolve(results);
            })
            .on('error', (error) => {
                logger.error('Error reading CSV file from: ' + fileName, error);
                reject(error);
            });
    });
};

export default csvParser;
