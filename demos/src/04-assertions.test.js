// Matchers

// Test Object
test('test object', () => {
  const data = { name: 'Dwayne' };
  data.lastName = 'Johnson';
  expect(data).toEqual({ name: 'Dwayne', lastName: 'Johnson' });
});

// Test Null
test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

// Test Booleans
test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

// Test String
test('string', () => {
  expect('Dwayne').toMatch(/way/);
});

// Test List / Array
test('list / array', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
