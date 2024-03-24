const { fetchCsvTransactions } = require('../helpers/allHelpers.js');
const { addTransactions } = require('../states/transactionsSlice.js');
const { markCsvLoaded } = require('../states/diagnosticsSlice.js');
const store = require('../states/store.js');

const handleLoadPath = async () => {
    let transactionsFromCSV = await fetchCsvTransactions();
    store.dispatch(addTransactions(transactionsFromCSV));

    store.dispatch(markCsvLoaded());
}

module.exports = handleLoadPath;