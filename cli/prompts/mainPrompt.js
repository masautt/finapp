const { Select } = require('enquirer');

const prompt = new Select({
    name: 'action',
    message: 'Choose an option:',
    choices: [
      'Parse transactions from CSV',
      'Save transactions to local storage',
      'Filter transactions by option',
      'Enquire transactions',
      'Exit'
    ]
  });

module.exports = prompt;