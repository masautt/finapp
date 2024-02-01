import enquirer from 'enquirer';

const response = await enquirer.prompt({
    type: 'select',
    name: 'action',
    message: 'Welcome to Cash Commander. What would you like to do?',
    choices: [
      { name: "validate"},
      { name: "exit"},
    ],
  });

  switch (response.action) {
    case 'validate':
      break;

    case 'exit':
        process.exit();
    default:
      console.log('Invalid option. Please choose a valid action.');
      break;
  }