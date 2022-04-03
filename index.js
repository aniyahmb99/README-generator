// TODO: Include packages needed for this application
const fs = require("fs");
const { write } = require("ieee754");
const inquirer = require("inquirer");
const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project's title?",
    name: "Title",
  },
  {
    type: "input",
    message: " Please write a brief description of this project ",
    name: "Description",
  },
  {
    type: "input",
    message: "Please provide a table of contents",
    name: "Table of Contents",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your Github email address?",
    name: "Github email",
  },
  {
    type: "input",
    message: "What is the test process for this project?",
    name: "test",
  },
  {
    type: "input",
    message: " Who are the contributors to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please provide instructions on how to install this project",
    name: "installation",
  },
  {
    type: "input",
    message: "How will this project be used? Please describe.",
    name: "usage",
  },
  {
    type: "input",
    message: "Which license will you use for this project? MIT or GNU",
    name: "license",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(fileName, data);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}

// Function call to initialize app
init();
