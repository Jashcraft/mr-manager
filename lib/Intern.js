//this will add properties for Interns 

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school){
    super(id, name, email)
    this.school = school
  }
  getSchool(){
    return this.school
  }
  getRole(){
    return "Intern"
  }
}

module.exports = Intern;