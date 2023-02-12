const generateHTML = require('./src/template');

const inquirer = require('inquirer');
const fs = require('fs');

// import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamProfile = [];

const addManager = () => {
    inquirer.prompt([
        {
            name: 'role',
            type: 'confirm',
            message: `Welcome! Let start!`
        },
        {
            name: 'name',
            type: 'input',
            message: 'What is the manager\s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name!");
                    return false;
                }
            }
        },

        {
            name: 'id',
            type: 'input',
            message: "What is the manager's ID?",
            validate: idInput => {
                if (!idInput) {
                    console.log("Please enter manager's ID!");
                    return false;
                } else if(isNaN(idInput)){
                    console.log("ID should be a number!");
                    return false;
                }else {
                    return true;
                }
                }
        },
        {
            name: 'email',
            type: 'input',
            message: "Please enter the manager's email?",
            validate: email => {
                valid = /^\W+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                    return false;
                }
            }
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: "What is the manager's office number?",
            validate: numberInput => {
                if (!numberInput) {
                    console.log("Please enter manager's office number!");
                    return false;
                } else if(isNaN(numberInput)){
                    console.log("Office number should be a number!");
                    return false;
                }else {
                    return true;
                }
                }
            },
    {
        type: 'list',
        name: 'addMember',
        message: 'What type of employee would you like to add?',
        choices: ['Enginner', 'Intern', 'N/A'],
    }

.then(managerAnswers) => {

    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
    team.push(manager)
    switch(managerAnswers.addMember){
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        default:
            writeToFile('./')
    }
}
    ])
}


