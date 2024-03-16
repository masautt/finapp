const store = require('./states/store');

const questions = [
    {
        question: "When was the last time I paid for a haircut?",
        answer: () => {
            let transactions = store.getState().transactions.all;

            const hairCutTransactions = transactions.filter(transaction => transaction.subcategory.toLower() === 'haircut');
            if (hairCutTransactions.length > 0) {
                const lastHairCutDate = new Date(Math.max(...hairCutTransactions.map(transaction => new Date(transaction.date))));
                const currentDate = new Date();
                const diffTime = Math.abs(currentDate - lastHairCutDate);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const months = Math.floor(diffDays / 30);
                const days = diffDays % 30;
                const formattedLastHairCutDate = lastHairCutDate.toLocaleDateString();

                const totalSpent = hairCutTransactions.reduce((total, transaction) => total + transaction.amount, 0);
                const averageSpent = totalSpent / hairCutTransactions.length;

                const sortedDates = hairCutTransactions.map(transaction => new Date(transaction.date)).sort((a, b) => b - a);
                const timeBetweenPurchases = sortedDates.reduce((total, date, index, array) => {
                    if (index < array.length - 1) {
                        const diffTime = Math.abs(date - array[index + 1]);
                        return total + diffTime;
                    } else {
                        return total;
                    }
                }, 0);
                const averageTimeBetweenPurchases = timeBetweenPurchases / (hairCutTransactions.length - 1);
                const averageMonths = Math.floor(averageTimeBetweenPurchases / (1000 * 60 * 60 * 24 * 30));
                const averageDays = Math.floor((averageTimeBetweenPurchases % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

                console.log(`
                It has been ${months} months and ${days} days since your last haircut on ${formattedLastHairCutDate}.
                You spent ${totalSpent.toFixed(2)} dollars on haircuts.
                The average you spend on a haircut is ${averageSpent.toFixed(2)} dollars.
                You typically purchase a haircut every ${averageMonths} months and ${averageDays} days.
                `);
            } else {
                console.log("You have not paid for a haircut yet.");
            }
        }
    },
    {
        question: "When was the last time I paid for gas?",
        answer: () => {
            let transactions = store.getState().transactions.all;

            const gasTransactions = transactions.filter(transaction => transaction.subcategory === 'gas');
            if (gasTransactions.length > 0) {
                const lastGasDate = new Date(Math.max(...gasTransactions.map(transaction => new Date(transaction.date))));
                const currentDate = new Date();
                const diffTime = Math.abs(currentDate - lastGasDate);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const months = Math.floor(diffDays / 30);
                const days = diffDays % 30;
                const formattedLastGasDate = lastGasDate.toLocaleDateString();

                const totalSpent = gasTransactions.reduce((total, transaction) => total + transaction.amount, 0);
                const averageSpent = totalSpent / gasTransactions.length;

                const sortedDates = gasTransactions.map(transaction => new Date(transaction.date)).sort((a, b) => b - a);
                const timeBetweenPurchases = sortedDates.reduce((total, date, index, array) => {
                    if (index < array.length - 1) {
                        const diffTime = Math.abs(date - array[index + 1]);
                        return total + diffTime;
                    } else {
                        return total;
                    }
                }, 0);
                const averageTimeBetweenPurchases = timeBetweenPurchases / (gasTransactions.length - 1);
                const averageMonths = Math.floor(averageTimeBetweenPurchases / (1000 * 60 * 60 * 24 * 30));
                const averageDays = Math.floor((averageTimeBetweenPurchases % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

                return `
                It has been ${months} months and ${days} days since you last paid for gas on ${formattedLastGasDate}.
                You spent ${totalSpent.toFixed(2)} dollars on gas.
                The average you spend on gas is ${averageSpent.toFixed(2)} dollars.
                You typically buy gas every ${averageMonths} months and ${averageDays} days.
                `;
            } else {
                return "You have not paid for gas yet.";
            }
        }
    }
];

module.exports = questions;
