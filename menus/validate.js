import enquirer from 'enquirer';

const validateMenu = await enquirer.prompt({
  type: 'select',
  name: 'action',
  message: 'What would you like to validate?',
  choices: [
    { name: "all" },
    { name: "ids" },
    { name: "categories" }
  ],
});

switch (validateMenu.action) {
  case 'all':
    break;
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

export default mainMenu;