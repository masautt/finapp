import React, { useEffect } from "react";
import "./App.css";
import MainPage from './components/MainPage'
import { useDispatch } from 'react-redux'; 
import { addTransactions } from './states/transactionsSlice'; 
import transactionsData from './data/transactions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTransactions(transactionsData));
  }, [dispatch]);

  return (
    <React.Fragment>
       <MainPage/>
    </React.Fragment>
  );
}

export default App;
