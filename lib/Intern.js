const Employee = require("./Employee")

class intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  } // Overridden to return 'Intern'
}

//export Intern class
module.exports = intern;