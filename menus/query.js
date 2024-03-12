import enquirer from 'enquirer';

const queryMenu = async () => {
  const response = await enquirer.prompt({
    type: 'select',
    name: 'action',
    message: 'What would you like to query?',
    choices: [
      { name: "How much" },
      { name: "How often" },
      { name: "How many" }
    ],
  });

  switch (response.action) {
    case 'ids':
      break;
    case 'categories':
      break;
    case 'exit':
      process.exit();
    default:
      console.log('Invalid option. Please choose a valid action.');
      break;
  }
};

const haircutQuery = {
  getValues(transactions){
    return transactions.filter((transaction) => transaction["SubCategory"] == "Haircut");
  }
};

export default queryMenu;
