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
        message: 'Please the name of the new team member',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter in their ID number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter in their email address'
    }
]

const generateTeam = () => {
    inquirer
    .prompt(questions)
    .then((responses) => {
        console.log(responses)
    })

}
generateTeam()