const Engineer = require("../lib/Engineer");

test('Can set GitHUb account via constructor', () => {
  const testValue = 'Noah8863';
  const e = new Engineer('Noah', '88', 'email@email.com', testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer('Noah', 1, 'email@email.com', 'Noah8863');
  expect(e.getRole()).toBe(testValue);
});

test('getGithub should return github name', () => {
  const testValue = "GitHubUser";
  const e = new Engineer('Noah', 1, 'email@email.com', testValue);
  expect(e.getGithub()).toBe(testValue);
});