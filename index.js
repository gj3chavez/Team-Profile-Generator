const generateHTML = require('./src/template');

const inquirer = require('inquirer');
const fs = require('fs');

// import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let team = [];

const addManager = () => {
    inquirer.prompt([
        {
            name: 'role',
            type: 'confirm',
            message: `Welcome to the Team Profile!`
        },
        {
            name: 'name',
            type: 'input',
            message: "What is the manager's name?",
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
])

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
            writeToFile('dist/index.html', generateHTML(team))
    }
});
} 



const addEngineer = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the engineer\s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },

        {
            name: 'id',
            type: 'input',
            message: "What is the engineer's ID?",
            validate: idInput => {
                if (!idInput) {
                    console.log("Please enter engineerr's ID!");
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
            message: "Please enter the engineer's email?",
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
            name: 'github',
            type: 'input',
            message: "What is the engineer's Github?",
            validate: githubInput => {
                if (!githubInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                
                }
                }
            },
    {
        type: 'list',
        name: 'addMember',
        message: 'What type of employee would you like to add?',
        choices: ['Enginner', 'Intern', 'N/A'],
    }
    ])

.then(engineerAnswers) => {

    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
    team.push(engineer)
    switch(engineerAnswers.addMember){
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        default:
            writeToFile('dist/index.html', generateHTML(team))
    }
}),
  
}


const addIntern = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name!");
                    return false;
                }
            }
        },

        {
            name: 'id',
            type: 'input',
            message: "What is the intern's ID?",
            validate: idInput => {
                if (!idInput) {
                    console.log("Please enter intern's ID!");
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
            message: "Please enter the intern's email?",
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
            name: 'github',
            type: 'input',
            message: "What is the intern's School?",
            validate: githubInput => {
                if (!githubInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school!");
                
                }
                }
            },
    {
        type: 'list',
        name: 'addMember',
        message: 'What type of employee would you like to add?',
        choices: ['Enginner', 'Intern', 'N/A'],
    }
    ])

.then(internAnswers) => {

    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
    team.push(intern)
    switch(internAnswers.addMember){
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        default:
            writeToFile('dist/index.html', generateHTML(team))
    }
});
  
}

addManager();

function writeToFile(filename, data) {
    fs.writeFile(filename,data,(err)=>{
    if (err) throw err;
    console.log('Your profile has been created succesfully!')
});

};

