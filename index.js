const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const initialQuestions = [
  {
    message: "Would you like to add a team member?",
    type: "confirm",
    name: "addMember"
  }
]

const startApp = function(){
  inquirer.prompt(initialQuestions)
} 

startApp();