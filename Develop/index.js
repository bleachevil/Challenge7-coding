// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter the title!")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter the description!")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is your installation instructions?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter the installation instructions!")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter the usage information!")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'What is your contribution guidelines?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter the contribution guidelines!")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'What is your test instructions?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter the test instructions!")
                return false;
            }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is your license?',
        choices: ['MIT','ISC','Eclipse','The Unlicense'],
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please select the license!")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter your GitHub username!")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: title => {
            if(title) {
                return true;
            }
            else {
                console.log("please enter your GitHub username!")
                return false;
            }
        }
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function (error) {console.log(error)})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(input =>
        //console.log(input);
        writeToFile("GENERATEMARKDOWN.md",generateMarkdown(input))
    )
    .catch((error)=> console.log(error))
}

// Function call to initialize app
init();
