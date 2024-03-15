const { getDateString } = require('../utils/dateHelper.js');
const { prompt } = require('enquirer');


const defaults = {
  category: "Life",
  subcategory: "Clothing",
  recipient: "Marek",
  necessity: "Need",
  startDate: "01/01/22",
  endDate: getDateString(new Date())
};

const filterPrompt = async () => {
  const res = await prompt({
    type: 'form',
    name: 'filterPrompt',
    message: 'Enter the missing values:',
    choices: [
      { name: 'category', initial: defaults.category },
      { name: 'subcategory', initial: defaults.subcategory },
      { name: 'recipient', initial: defaults.recipient },
      { name: 'necessity', initial: defaults.necessity },
      { name: 'startDate', initial: defaults.startDate },
      { name: 'endDate', initial: defaults.endDate }
    ]
  });
  return res.filterPrompt;
}

module.exports = { filterPrompt };


