const Intern = require("../lib/Intern");

test('Can set school via constructor', () => {
  const testValue = "UCLA";
  const e = new Intern('Noah', 1, 'email@email.COM', testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = 'Intern';
  const e = new Intern('Noah', 1, 'email@email.com', 'UCLA');
  expect(e.getRole()).toBe(testValue);
});

test('getschool() should return UCLA', () => {
  const testValue = 'UCLA';
  const e = new Intern('Noah', 1, 'email@email.com', testValue);
  expect(e.getSchool()).toBe(testValue);
});