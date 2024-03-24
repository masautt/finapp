const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const parseTransactionValue = (key, value) => {
  if (!isNaN(value) && value !== '' && !value.match(/[^0-9.]/)) {
    return parseFloat(value); // Parse as a float (you can use parseInt for integers)
  }
  // Check if the key is 'exception' and the value is 'true' or 'false'
  if (key === 'exclusion' && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    return value.toLowerCase() === 'true'; // Parse to boolean
  }
  // Otherwise, return the value as is
  return value;
};

const parseCsvTransactions = async () => {
  const fileName = process.env[`TRANSACTIONS_FILE`];
  const fileFolder = process.env[`TRANSACTIONS_FOLDER`];
  const filePath = path.join(fileFolder, fileName);

  return new Promise((resolve, reject) => {
    // Check if the file exists before attempting to read
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        //logger.error(`Error: CSV file not found at ${filePath}`);
        reject(err);
        return;
      }

      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => {
          // Rename 'ex' to 'exclusion' and parse values
          const transformedData = {};
          Object.keys(data).forEach((key) => {
            const lowerCaseKey = key.toLowerCase();
            const newKey = lowerCaseKey === 'ex' ? 'exclusion' : lowerCaseKey;
            transformedData[newKey] = parseTransactionValue(newKey, data[key]);
          });
          
          results.push(transformedData);
        })
        .on('end', () => {
          //logger.info(`Read ${results.length} records from ${fileName}`);
          resolve(results);
        })
        .on('error', (error) => {
          //logger.error(`Error reading CSV file from: ${fileName}`, error);
          reject(error);
        });
    });
  });

}

const filterEmptyTransactions = (transactions) => {
  return transactions.filter(transaction => {
    // Check if any attribute (except 'exclusion') has a non-empty value
    let hasNonEmptyValue = false;
    for (const key in transaction) {
      if (key !== 'exclusion' && transaction[key] !== '') {
        hasNonEmptyValue = true;
        break;
      }
    }
    return hasNonEmptyValue;
  });
};

const fetchCsvTransactions =  async () => {
  const allTransactions = await parseCsvTransactions();
  const nonEmptyTransactions = filterEmptyTransactions(allTransactions);
  return nonEmptyTransactions;
}

module.exports = { fetchCsvTransactions };
