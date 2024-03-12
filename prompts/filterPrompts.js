import { getDateString } from '../utils/dateHelper.js';
import Enquirer from 'enquirer';
const { Form } = Enquirer;



const defaults = {
  category: "Life",
  subCategory: "Clothing",
  recipient: "Marek",
  necessity: "Need",
  startDate: "01/01/22",
  endDate: getDateString(new Date())
};

export const filterPrompt = new Form({
  type: 'form',
  name: 'filterPrompt',
  message: 'Enter the missing values:',
  choices: [
    { name: 'category', initial: defaults.category },
    { name: 'subCategory', initial: defaults.subCategory },
    { name: 'recipient', initial: defaults.recipient },
    { name: 'necessity', initial: defaults.necessity },
    { name: 'startDate', initial: defaults.startDate},
    { name: 'endDate', initial: defaults.endDate}
  ]
});


