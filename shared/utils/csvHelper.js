const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const parseValue = (value) => {
  // Check if the value is a number, but not NaN
  if (!isNaN(value) && value !== '' && !value.match(/[^0-9.]/)) {
    return parseFloat(value); // Parse as a float (you can use parseInt for integers)
  }
  // Check if the value is an empty string
  if (value === '') {
    return value;
  }
  return value;
};

const csvParser = async (type, logger) => {
  const fileName = process.env[`${type}_FILE`];
  const fileFolder = process.env[`${type}_FOLDER`];
  const filePath = path.join(fileFolder, fileName);

  return new Promise((resolve, reject) => {
    // Check if the file exists before attempting to read
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        logger.error(`Error: CSV file not found at ${filePath}`);
        reject(err);
        return;
      }

      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => {
          // Convert keys to camel case and parse values
          const camelCaseData = {};
          Object.keys(data).forEach((key) => {
            const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
            camelCaseData[camelCaseKey] = parseValue(data[key]);
          });
          results.push(camelCaseData);
        })
        .on('end', () => {
          logger.info(`Read ${results.length} records from ${fileName}`);
          resolve(results);
        })
        .on('error', (error) => {
          logger.error(`Error reading CSV file from: ${fileName}`, error);
          reject(error);
        });
    });
  });
};

module.exports = csvParser;
