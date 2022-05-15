const Engineer = require('../lib/Engineer');

test('Can create a new Engineer',() => {
  const engineer = new Engineer()
  expect(typeof(engineer)).toBe("object")
})


test('Engineer has github',() => {
  const engineer = new Engineer('joe', '7', 'joe@joe.joe', 'stevejoe')
  expect(engineer.getGithub()).toBe("stevejoe")
})


test('Engineer has engineer role',() => {
  const engineer = new Engineer('joe', '7', 'joe@joe.joe', 'stevejoe')
  expect(engineer.getRole()).toBe("Engineer")
})
