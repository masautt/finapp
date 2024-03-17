const enquirer = require('enquirer');
const questions = require('../questions');

const inquirePrompt = async () => {

    const { question } = await enquirer.prompt({
        type: 'select',
        name: 'question',
        message: 'Select a question:',
        choices: questions.map((q, i) => ({ name: q.question, value: i }))
    });

    questions.find(q => q.question == question).answer();
};

module.exports = inquirePrompt;
