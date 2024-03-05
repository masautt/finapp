import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTransactions, fetchTransactions } from './states/transactionsSlice';
import { readCSVFromDevice } from './utils/csvParser';

const Home = () => {
    const dispatch = useDispatch();
    const filteredTransactions = useSelector(state => state.transactions.filteredData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Read CSV file from device
                const transactions = await readCSVFromDevice('./data/transactions.csv');

                // Dispatch action to add transactions to store
                dispatch(addTransactions(transactions));

                // Fetch transactions based on filters
                const filters = { category: "Life", subCategory: "Haircut" };
                dispatch(fetchTransactions(filters));
            } catch (error) {
                console.error('Error loading CSV:', error);
            }
        };

        fetchData();
    }, []);

    // Check if filteredTransactions is undefined
    if (!filteredTransactions) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Filtered Transactions:</Text>
            <View>
                {/* Render filtered transactions here */}
                {filteredTransactions.map(transaction => (
                    <Text key={transaction.id}>{/* Render transaction details */}</Text>
                ))}
            </View>
        </View>
    );
};

export default Home;