const Table = require('table');
const chalk = require('chalk');

const printTransactionsTable = (data) => {
    const tableData = data.map(transaction => {
        return [
            transaction.category,
            transaction.subcategory,
            transaction.date,
            chalk.green(transaction.amount), // Making amount green
            transaction.business,
            transaction.city,
            transaction.state,
            transaction.description,
            transaction.comments,
            transaction.recipient,
            transaction.necessity,
            transaction.reimburse,
            transaction.recurring,
        ];
    });

    const table = Table.table([[
        chalk.bold('Category'),
        chalk.bold('Subcategory'),
        chalk.bold('Date'),
        chalk.bold('$'), // Bolded the dollar sign
        chalk.bold('Business'),
        chalk.bold('City'),
        chalk.bold('State'),
        chalk.bold('Description'),
        chalk.bold('Comments'),
        chalk.bold('Recipient'),
        chalk.bold('Necessity'),
        chalk.bold('Reimburse'),
        chalk.bold('Recurring'),
    ], ...tableData]);

    console.log(table);
}

const printTransactionsSummaryTable = (data) => {
    const numTransactions = data.length;

    // Calculate total transaction amounts
    const totalAmount = data.reduce((total, transaction) => total + transaction.amount, 0);

    // Find first and last transaction dates
    const sortedDates = data.map(transaction => new Date(transaction.date).getTime()).sort((a, b) => a - b);
    const firstTransactionDate = new Date(sortedDates[0]).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2-digit' });
    const lastTransactionDate = new Date(sortedDates[sortedDates.length - 1]).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2-digit' });

    // Calculate average transaction amount
    const averageAmount = totalAmount / numTransactions;

    // Calculate average number of transactions per day, per week, per month, per year
    const firstTransactionYear = new Date(sortedDates[0]).getFullYear();
    const lastTransactionYear = new Date(sortedDates[sortedDates.length - 1]).getFullYear();
    const totalYears = lastTransactionYear - firstTransactionYear + 1;

    const daysDiff = (sortedDates[sortedDates.length - 1] - sortedDates[0]) / (1000 * 3600 * 24);
    const weeksDiff = daysDiff / 7;
    const monthsDiff = (lastTransactionYear - firstTransactionYear) * 12 + new Date(sortedDates[sortedDates.length - 1]).getMonth() - new Date(sortedDates[0]).getMonth() + 1;
    const yearsDiff = totalYears;

    const avgTransactionsPerDay = numTransactions / daysDiff;
    const avgTransactionsPerWeek = numTransactions / weeksDiff;
    const avgTransactionsPerMonth = numTransactions / monthsDiff;
    const avgTransactionsPerYear = numTransactions / yearsDiff;

    // Find most frequented business
    const businessFrequencies = data.reduce((freq, transaction) => {
        freq[transaction.business] = (freq[transaction.business] || 0) + 1;
        return freq;
    }, {});

    const avgAmountPerDay = totalAmount / daysDiff;
    const avgAmountPerWeek = totalAmount / weeksDiff;
    const avgAmountPerMonth = totalAmount / monthsDiff;
    const avgAmountPerYear = totalAmount / yearsDiff;

    const mostFrequentedBusiness = Object.keys(businessFrequencies).reduce((a, b) => businessFrequencies[a] > businessFrequencies[b] ? a : b);

    // Find most spent business
    const businessAmounts = data.reduce((amounts, transaction) => {
        amounts[transaction.business] = (amounts[transaction.business] || 0) + transaction.amount;
        return amounts;
    }, {});

    const mostSpentBusiness = Object.keys(businessAmounts).reduce((a, b) => businessAmounts[a] > businessAmounts[b] ? a : b);

    // Find most common weekday
    const weekdayFrequencies = data.reduce((freq, transaction) => {
        freq[transaction.weekday] = (freq[transaction.weekday] || 0) + 1;
        return freq;
    }, {});

    const mostCommonWeekday = Object.keys(weekdayFrequencies).reduce((a, b) => weekdayFrequencies[a] > weekdayFrequencies[b] ? a : b);

    // Find largest and smallest transaction amounts
    const amounts = data.map(transaction => transaction.amount);
    const largestTransactionAmount = Math.max(...amounts);
    const smallestTransactionAmount = Math.min(...amounts);

    // Find most frequent month
    const monthFrequencies = data.reduce((freq, transaction) => {
        const month = new Date(transaction.date).toLocaleDateString('en-US', { month: 'short' });
        freq[month] = (freq[month] || 0) + 1;
        return freq;
    }, {});

    const mostFrequentMonth = Object.keys(monthFrequencies).reduce((a, b) => monthFrequencies[a] > monthFrequencies[b] ? a : b);

    // Generate the statistics table
    const tableData = [
        ['Total Number', chalk.dim(numTransactions)],
        ['Total Amount', chalk.green(totalAmount.toFixed(0))],
        ['Avg Amount', chalk.green(averageAmount.toFixed(0))],
        ['Largest Amount', chalk.green(largestTransactionAmount.toFixed(0))], 
        ['Smallest Amount', chalk.green(smallestTransactionAmount.toFixed(0))], 
        ['First Date', chalk.dim(firstTransactionDate)],
        ['Last Date', chalk.dim(lastTransactionDate)],
        ['Most Frequent Month', chalk.dim(mostFrequentMonth)],
        ['Most Frequent Weekday', chalk.dim(mostCommonWeekday)],
        ['Most Frequent Business', chalk.dim(mostFrequentedBusiness)],
        ['Most Spent Business', chalk.dim(mostSpentBusiness)],
        ['Avg number per Day', chalk.dim(avgTransactionsPerDay.toFixed(2))],
        ['Avg number per Week', chalk.dim(avgTransactionsPerWeek.toFixed(2))],
        ['Avg number per Month', chalk.dim(avgTransactionsPerMonth.toFixed(2))],
        ['Avg number per Year', chalk.dim(avgTransactionsPerYear.toFixed(2))],
        ['Avg Amount per Day', chalk.green(avgAmountPerDay.toFixed(2))],
        ['Avg Amount per Week', chalk.green(avgAmountPerWeek.toFixed(2))],
        ['Avg Amount per Month', chalk.green(avgAmountPerMonth.toFixed(2))],
        ['Avg Amount per Year', chalk.green(avgAmountPerYear.toFixed(2))],
    ];

    const numColumns = 6;
    const numRows = Math.ceil(tableData.length / numColumns);
    const table = [];

    for (let i = 0; i < numRows; i++) {
        const rowData = [];
        for (let j = 0; j < numColumns; j++) {
            const index = i * numColumns + j;
            if (index < tableData.length) {
                rowData.push(tableData[index].join(': '));
            } else {
                rowData.push('');
            }
        }
        table.push(rowData);
    }

    table.forEach(row => console.log(row.join('\t')));
    console.log();
}


module.exports = { printTransactionsTable, printTransactionsSummaryTable };
