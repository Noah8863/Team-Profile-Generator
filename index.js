const inquirer = require('inquirer')
const fs = require('fs')
//const htmlPage = require('/index')

const employee = require('./lib/Employee')
const manager = require('./lib/Manger')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')

const roles = ['Manger', 'Engineer', 'Intern']

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

const managerOffice = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter in the Managers Office Number:'
    }
]

const engineerGitHub = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the engineers github username:'
    }
]

const internSchool = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter in the Interns School they attended:'
    }
]

const moreMembers = [
    {
        type: 'list',
        name: 'continue',
        message: 'Would you like to add more members?',
        choices: ['Yes', 'No'],
    }
]

const generateTeam = () => {
    inquirer
    .prompt(questions)
    .then((responses) => {
        if (responses.role === 'Engineer'){
            inquirer
            .prompt(engineerGitHub)
            .then((engineerAns) => {
                console.log(engineerAns, responses)
            })
        }
        if (responses.role === 'Intern'){
            inquirer
            .prompt(internSchool)
            .then((internAns) => {
                console.log(internAns, responses)
                inquirer
                    .prompt(moreMembers)
                    .then((response) => {
                        if (response.contine === 'Yes'){
                            generateTeam()
                        }
                    })
            })
        }
        if (responses.role === 'Manger'){
            inquirer
            .prompt(managerOffice)
            .then((managerAns) => {
                console.log(managerAns, responses)
            })
        }
    })
}
generateTeam()
