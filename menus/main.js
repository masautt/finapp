import enquirer from 'enquirer';

const mainMenu = async () => {
  const response = await enquirer.prompt({
    type: 'select',
    name: 'action',
    message: 'Welcome to Cash Commander. What would you like to do?',
    choices: [
      { name: "query" },
      { name: "exit" },
    ],
  });

  switch (response.action) {
    case 'query':
      return 'query';
    case 'exit':
      process.exit();
    default:
      console.log('Invalid option. Please choose a valid action.');
      return 'invalid';
  }
};

export default mainMenu;
