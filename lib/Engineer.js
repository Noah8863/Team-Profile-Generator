const Employee = require("../lib/Employee")

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role)
    this.github = github
  }
  getGithub() {
    return this.github
  }
  getRole() {
    return 'Engineer'
  }
}

//export the Manager class
module.exports = Engineer