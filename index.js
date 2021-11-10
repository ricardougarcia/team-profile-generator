// command line appl[ication to accept user input. leverage inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./generateHtml.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager");
const allEmployees = [];
// add intern

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What's your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your ID",
      name: "id",
    },
    {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    allEmployees.push(manager);

    addMore();
  });

/// maybe add a reset style
function addMore() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add and engineer or intern?",
        choices: ["intern", "engineer", "no"],
        name: "addIe",
      },
    ])
    .then((answers) => {
      switch (answers.addIe) {
        case "intern":
          // intern code goes here
          internQ();
          break;
        case "engineer":
          // engineer code goes here
          engineerQ();
          break;
        default:
          // no option code goes here
          fs.writeFile("answers.html", generateHtml(allEmployees), (err) => {
            console.log(err);
          });
          break;
      }
    });
}

function internQ() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What's the intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's ID",
        name: "id",
      },
      {
        type: "input",
        message: "What school the intern with or from?",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      allEmployees.push(intern);
      addMore();
    });
}

function engineerQ() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What's the engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's ID",
        name: "id",
      },
      {
        type: "input",
        message: "What's the engineer's github?",
        name: "github",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      allEmployees.push(engineer);
      addMore();
    });
}
