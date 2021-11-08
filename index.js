// command line appl[ication to accept user input. leverage inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./generateHtml.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");
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

    inquirer.prompt([
      {
        type: "list",
        message: "Would you like to add and engineer or intern?",
        choices: ["intern", "engineer", "no, I'm done"],
        name: "addIe",
      },
    ])
      // establish switch here
      .then((answer) => {
        const value1 = (answer.addIe === "intern");
        const value2 = (answer.addIe === "engineer");
        switch(answer.addIe){
            case value1:
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
                    {
                    type: "input",
                    message: "What school are you with or from?",
                    name: "school",
                    },
                ])
                    .then((answers) => {
                            const intern = new Intern(
                              answers.name,
                              answers.id,
                              answers.email,
                              answers.officeNumber,
                              answers.school,
                            );
                            allEmployees.push(intern);
                            break;
                          });
                }}
    fs.writeFile("answers.html", generateHtml(answers), (err) => {
      console.log(err);
    })
// generate an html from input
// how do i specify where in the directory?

/// maybe add a reset style sheet
