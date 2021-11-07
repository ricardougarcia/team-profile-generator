// command line appl[ication to accept user input. leverage inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./generateHtml.js");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const allEmployees = [];
// add intern

// WHEN I start the application. Consider what start means
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team. Consider adding functionaility to end of prompt that presents additional option, could just be a another prompt with boolean to trigger or return.

// WHEN I select the engineer option. Must somehow note path or title.
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu. Repeat previous code structure.

// WHEN I select the intern option. repeat above.
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team.
// THEN I exit the application, and the HTML is generated. Finished prompt that allows for continuation?

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "input",
      message: "What's your location?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your bio link?",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn url?",
      name: "linkedin",
    },
    {
      type: "input",
      message: "What is your GitHub url?",
      name: "github",
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

    fs.writeFile("answers.html", generateHtml(answers), (err) => {
      console.log(err);
    });
  });
// generate an html from input
// how do i specify where in the directory?

/// maybe add a reset style sheet
