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
        LOAD_OPTION: 'Load Transactions',
        FILTER_OPTION: 'Filter Transactions',
        EXPORT_OPTION: 'Export Transactions',
        SUMMARY_OPTION: 'Inquire Transactions',
        EXIT_OPTION: 'Exit'
    },
    introMessage:
    `
        ${chalk.green('Welcome to Budget Buddy v1.25!')} 
        ${chalk.blueBright('How man I assist you today?')}
    `
}
module.exports = constants;