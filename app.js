import enquirer from 'enquirer';
import getLogger from './config/logger.js';
import readFileAsync from './utils/csvParser.js';
import 'dotenv/config';

(async () => {
  try {
    const logger = getLogger();

    const response = await enquirer.prompt({
      type: 'select',
      name: 'action',
      message: 'Welcome to Cash Commander. What would you like to do?',
      choices: [
        { name: "parse"},
        { name: "validate"},
        { name: "exit"},
      ],
    });

    switch (response.action) {

      case 'parse':
        const data = await readFileAsync(logger);
        console.log("Parsing");
        break;

      case 'validate':
        break;

      case 'exit':
        break;

      default:
        console.log(response);
        console.log('Invalid option. Please choose a valid action.');
        break;
    }

  } catch (error) {
    console.error('Error in main script:', error);
  }
})();