const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const buildHTML = require('./src/templater.js')

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


const baseEmployeeQuestions = [
  {
    message: "What is this employees name?",
    type: "input",
    name: "memberName"
  },
  {
    message: "What is the employees ID?",
    type: "input",
    name: "memberId"
  },
  {
    message: "What is the employees email?",
    type: "input",
    name: "memberEmail"
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
        break;
      case "Intern":
        createIntern();
        break;
      default:
        break;
    }
  })
}


const createManager = () => {
  //this will create a manager by asking manager related prompts
  const managerQuestions = [
    ...baseEmployeeQuestions,
    {
      message: "What is the managers office number?",
      type: "input",
      name: "managerNumber"
    }
  ]
  inquirer.prompt(managerQuestions)
  .then(answers => {
    const {memberName, memberId, memberEmail, managerNumber} = answers
    const manager = new Manager(memberName, memberId, memberEmail, managerNumber)
    teamMembers.push(manager);
    startApp();
  })
}

const createEngineer = () => {
  //this will create an Engineer by asking Engineer related prompts
  const engineerQuestions = [
    ...baseEmployeeQuestions,
    {
      message: "What is this Engineers github username?",
      type: "input",
      name: "gitHubUsername"
    }
  ]
  inquirer.prompt(engineerQuestions)
  .then(answers => {
    const {memberName, memberId, memberEmail, gitHubUsername} = answers;
    const engineer = new Engineer(memberName, memberId, memberEmail, gitHubUsername)
    teamMembers.push(engineer);
    startApp();
  })
}

const createIntern = () => {
  // this will create an intern by asking Intern related prompts
  const internQuestions = [
    ...baseEmployeeQuestions,
    {
      message: "What is this Interns School?",
      type: "input",
      name: "school"
    }
  ]
  inquirer.prompt(internQuestions)
  .then(answers => {
    const {memberName, memberId, memberEmail, school} =answers
    const intern = new Intern(memberName, memberId, memberEmail, school)
    teamMembers.push(intern);
    startApp();
  })
}

const buildTeam = () => {
  const teamHTML = buildHTML(teamMembers);
  fs.writeFile("./build/index.html", teamHTML, () => {
    console.log('donion rings');
  })
  //write teamHTML to file
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