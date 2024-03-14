import React, { useEffect } from "react";
import "./App.css";
import MainPage from './components/MainPage'
import { useDispatch } from 'react-redux'; 
import { addTransactions } from './states/transactionsSlice'; 
import { addOptions } from './states/optionsSlice';

import transactions from './data/transactions';

import businesses from './data/businessOptions';
import categories from './data/categoryOptions';
import locations from './data/locationOptions';
import recipients from './data/recipientOptions';
import reimburses from './data/reimburseOptions';
import subcategories from './data/subcategoryOptions';
import recurrings from './data/recurringOptions';
import necessities from './data/necessityOptions';

const options = {
  businesses : businesses,
  categories : categories,
  locations : locations,
  recipients : recipients,
  reimburses : reimburses,
  subcategories : subcategories,
  recurrings : recurrings,
  necessities : necessities
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addOptions(options))
    dispatch(addTransactions(transactions));
  }, [dispatch]);

  return (
    <React.Fragment>
       <MainPage/>
    </React.Fragment>
  );
}

export default App;
