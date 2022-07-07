const Employee = require("./Employee")

class intern extends Employee {
    constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

//export Intern class
module.exports = intern;