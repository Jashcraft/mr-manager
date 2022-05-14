const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMembers = [];

const initialQuestions = [
  {
    message: "Would you like to add a team member?",
    type: "confirm",
    name: "addMember"
  }
]

const addTeamMember = () => {
  const memberTypeQuestion = [
    {
      message: "What type of team member would you like to create",
      type: "list",
      name: "memberType",
      choices: [
        "Manager",
        "Engineer",
        "Intern"
      ]
    }
  ];
  inquirer.prompt(memberTypeQuestion)
  .then(answers => {
    switch (answers.memberType) {
      case "Manager":
        createManager();
        break;
      case "Engineer":
        createEngineer();
      case "Intern":
        createIntern();
      default:
        break;
    }
  })
}


const createManager = () => {
  //this will create a manager by asking manager related prompts
  console.log('running the createManager function') 
}

const createEngineer = () => {
  //this will create an Engineer by asking Engineer related prompts
  console.log('running the createEngineer function') 
}

const createIntern = () => {
  // this will create an intern by asking Intern related prompts
  console.log('running the createIntern function')
}


const startApp = function(){
  inquirer.prompt(initialQuestions)
  .then(answers => {
    if(answers.addMember){
      addTeamMember();
    }
    else {
      if(!teamMembers.length){
        console.log("At least one team member required. Please create a team member.")
        startApp();
      } else {
        buildTeam();
      }
    }
  })
} 

startApp();