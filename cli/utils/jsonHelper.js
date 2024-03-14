const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = async (transactions) => {
    const dataDirectory = './src/data';
    const moduleExports = 'module.exports = ';
    const jsDocComments = `
    /**
     * @typedef {Object} Transaction
     * @property {string} scategory - The type of transaction.
     * @property {string} subcategory - The subtype of the transaction.
     * @property {number} year - The year of the transaction.
     * @property {string} month - The month of the transaction.
     * @property {number} day - The day of the transaction.
     * @property {string} weekday - The weekday of the transaction.
     * @property {string} date - The dateStr of the transaction.
     * @property {number} amount - The dollar amount of the transaction.
     * @property {id} string - The unique id of the transaction.
     * @property {business} string - The business name of the transaction.
     * @property {city} string - The city of the transaction.
     * @property {state} string - The state of the transaction.
     * @property {description} string - The description of the transaction.
     * @property {comments} string - The comments of the transaction.
     * @property {recipient} string - The recipient of the transaction.
     * @property {necessity} string - The necessity of the transaction.
     * @property {reimburse} string - The reimbursement of the transaction.
     * @property {exclusion} string - The exclusion of the transaction.
     */
    
    /**
     * Array of transaction objects.
     * @type {Transaction[]}
     */
  `;

  // Check if the data directory exists, create it if not
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory);
  }

  const transactionsString = `${jsDocComments}\n\n${moduleExports}${JSON.stringify(transactions, null, 2)}`;
  await writeFileAsync(`${dataDirectory}/transactions.js`, transactionsString);

  const uniqueCategories = [...new Set(transactions.map(transaction => transaction.category))];
  const categoriesString = `${moduleExports}${JSON.stringify(uniqueCategories, null, 2)};`;
  await writeFileAsync(`${dataDirectory}/categoryOptions.js`, categoriesString);

  const uniqueSubcategories = [...new Set(transactions.map(transaction => transaction.subcategory))];
  const subcategoriesString = `${moduleExports}${JSON.stringify(uniqueSubcategories, null, 2)};`;
  await writeFileAsync(`${dataDirectory}/subcategoryOptions.js`, subcategoriesString);

  const uniqueBusinesses = [...new Set(transactions.map(transaction => transaction.business))];
  const businessesString = `${moduleExports}${JSON.stringify(uniqueBusinesses, null, 2)};`;
  await writeFileAsync(`${dataDirectory}/businessOptions.js`, businessesString);

  const uniqueLocations = [...new Set(transactions.map(transaction => JSON.stringify({ city: transaction.city, state: transaction.state })))].map(JSON.parse);
  const locationsString = `${moduleExports}${JSON.stringify(uniqueLocations, null, 2)};`;
  await writeFileAsync(`${dataDirectory}/locationOptions.js`, locationsString);

  const uniqueRecipients = [...new Set(transactions.map(transaction => transaction.recipient))];
  const recipientsString = `${moduleExports}${JSON.stringify(uniqueRecipients, null, 2)};`;
  await writeFileAsync(`${dataDirectory}/recipientOptions.js`, recipientsString);

  const uniqueReimburse = [...new Set(transactions.map(transaction => transaction.reimburse))];
  const reimburseString = `${moduleExports}${JSON.stringify(uniqueReimburse, null, 2)};`;
  await writeFileAsync(`${dataDirectory}/reimburseOptions.js`, reimburseString);

  const uniqueRecurring = [...new Set(transactions.map(transaction => transaction.recurring))];
  const recurringString = `${moduleExports}${JSON.stringify(uniqueRecurring, null, 2)};`;
  await writeFileAsync(`${dataDirectory}/recurringOptions.js`, recurringString);
}
