const Intern = require('../lib/Intern')

test('Can create a new Intern',() => {
  const intern = new Intern()
  expect(typeof(intern)).toBe("object")
})


test('Intern has school',() => {
  const intern = new Intern('joe', '7', 'joe@joe.joe', 'stevejoe')
  expect(intern.getSchool()).toBe("stevejoe")
})


test('Intern has Intern role',() => {
  const intern = new Intern('joe', '7', 'joe@joe.joe', 'stevejoe')
  expect(intern.getRole()).toBe("Intern")
})
