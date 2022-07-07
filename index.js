const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const output = path.resolve(__dirname, 'dist')
const outputPath = path.join(output, 'index.html')
const render = require('./lib/htmltemplate')

const roles = ['Manager', 'Engineer', 'Intern']
const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What role would you like to add to the team?',
        choices: roles
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please the name of the new team member:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter in their ID number:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter in their email address:'
    }
]

const team = [];
const generateTeam = () => {
  inquirer
    .prompt(questions)
    .then((responses) => {
      inquirer
        .prompt([
          {
            when: () => responses.role === "Manager",
            type: "input",
            message: `Enter in ${responses.name}s office number:`,
            name: "officeNumber",
          },
          {
            when: () => responses.role === "Engineer",
            type: "input",
            message: `What is ${responses.name}s Github user name?`,
            name: "github",
          },

          {
            when: () => responses.role === "Intern",
            type: "input",
            message: `What school did ${responses.name} attend to?`,
            name: "school",
          },

          {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMember",
          },
        ])

        .then((responses2) => {
          if (responses.role === "Manager") {
            const manager = new Manager(responses.name, responses.id, responses.email, responses.role, responses.officeNumber);
            team.push(manager);
          }

          if (responses.role === "Engineer") {
            const engineer = new Engineer(responses.name, responses.id, responses.email, responses.role, responses.github);
            team.push(engineer);
          }

          if (responses.role === "Intern") {
            const intern = new Intern(responses.name, responses.id, responses.email, responses.role, responses.school);
            team.push(intern);
          }
          if (responses2.addMember) {
            generateTeam();
          } else {
            team.forEach((team) => {
              console.log(team);
            });
            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                return console.log(err)
              }
              console.log("Success, team HTML is created!");
            });
          }
        });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

generateTeam();
