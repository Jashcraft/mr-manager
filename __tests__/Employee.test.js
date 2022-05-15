const Employee = require('../lib/Employee');

test('Can create a new Employee',() => {
  const employee = new Employee()
  expect(typeof(employee)).toBe("object")
})

test('Employee has name', () => {
  const employee = new Employee('Joe')
  expect(employee.getName()).toBe('Joe')
})

test('Employee has ID', () => {
  const employee = new Employee('Joe','7')
  expect(employee.getId()).toBe('7')
})

test('Employee has email', () => {
  const employee = new Employee('joe', '7', 'joe@joe.joe')
  expect(employee.getEmail()).toBe('joe@joe.joe')
})