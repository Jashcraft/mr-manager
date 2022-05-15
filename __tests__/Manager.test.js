const Manager = require('../lib/Manager')

test('Can create a new Manager',() => {
  const manager = new Manager()
  expect(typeof(manager)).toBe("object")
})


test('Manager has Office Number',() => {
  const manager = new Manager('joe', '7', 'joe@joe.joe', '1')
  expect(manager.getNumber()).toBe("1")
})


test('Manager has Manager role',() => {
  const manager = new Manager('joe', '7', 'joe@joe.joe', 'stevejoe')
  expect(manager.getRole()).toBe("Manager")
})
