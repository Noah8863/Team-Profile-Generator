const Manager = require("../lib/Manager");

test('Can set office number via constructor argument', () => {
  const testValue = 100;
  const e = new Manager('Noah', 1, 'email@email.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = 'Manager';
  const e = new Manager('Noah', 1, 'email@email.com', 100);
  expect(e.getRole()).toBe(testValue);
});

test('getofficeNumber() should return 100', () => {
  const testValue = 100;
  const e = new Manager('Noah', 1, 'email@email.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});