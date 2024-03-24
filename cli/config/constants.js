const chalk = require('chalk');

const constants = {
    filterAttributes: ['category', 
    'subcategory', 
    'year', 
    'month', 
    'day', 
    'date', 
    'amount', 
    'business', 
    'city', 
    'state', 
    'description', 
    'comments', 
    'recipient', 
    'necessity', 
    'reimburse', 
    'recurring'
    ],
    menuOptions : {
        LOAD_OPTION: '1: Load Transactions',
        FILTER_OPTION: '2: Filter Transactions',
        EXPORT_OPTION: '3: Export Transactions',
        SUMMARY_OPTION: '4: Inquire Transactions',
        EXIT_OPTION: '5: Exit'
    },
    introMessage:
    `
        ${chalk.green('Welcome to Budget Buddy v1.23!')} 
        ${chalk.blueBright('How man I assist you today?')}
    `
}
module.exports = constants;