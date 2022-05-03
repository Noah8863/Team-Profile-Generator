const Employee = require("../lib/Employee")

// name
test('set employee name', () => {
    const name = 'Viv'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})
// id
test('set employee id', () => {
    const employee = new Employee('Viv', '07')
    expect(employee.id).toBe('07')
})

// email
test('set employee email', () => {
    const employee = new Employee('Viv', '07', 'viv@gmail.com')
    expect(employee.email).toBe('viv@gmail.com')
})

// getName()
test('get employee name', () => {
    const employee = new Employee('Viv')
    expect(employee.getName()).toBe('Viv')
})

// getId()
test('get employee id', () => {
    const employee = new Employee('Viv', '07')
    expect(employee.getId()).toBe('07')
})

// getEmail()
test('get employee email', () => {
    const employee = new Employee('Viv', '07', 'viv@gmail.com')
    expect(employee.getEmail()).toBe('viv@gmail.com')
})

// getRole()
test('get employee role', () => {
    const employee = new Employee('Viv', '07', 'viv@gmail.com')
    expect(employee.getRole()).toBe("Employee")
})