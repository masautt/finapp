const { getDateString } = require('../../src/shared/utils/dateHelper.js');
const Enquirer = require('enquirer');
const { Form } = Enquirer;


const defaults = {
  category: "Life",
  subcategory: "Clothing",
  recipient: "Marek",
  necessity: "Need",
  startDate: "01/01/22",
  endDate: getDateString(new Date())
};

const filterPrompt = new Form({
  type: 'form',
  name: 'filterPrompt',
  message: 'Enter the missing values:',
  choices: [
    { name: 'category', initial: defaults.category },
    { name: 'subcategory', initial: defaults.subcategory },
    { name: 'recipient', initial: defaults.recipient },
    { name: 'necessity', initial: defaults.necessity },
    { name: 'startDate', initial: defaults.startDate},
    { name: 'endDate', initial: defaults.endDate}
  ]
});

module.exports = { filterPrompt };


