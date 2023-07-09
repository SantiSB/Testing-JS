// Multiple functions imported
const {
  addition, subtraction, multiplication, division,
} = require('./02-math');

describe('math tests', () => {
  describe('test for addition', () => {
    test('adds 1 + 2 to equal 3', () => {
      const answer = addition(1, 2);
      expect(answer).toBe(3);
    });
  });

  describe('test for subtraction', () => {
    test('subtract 2 + 1 to equal 1', () => {
      const answer = subtraction(2, 1);
      expect(answer).toBe(1);
    });
  });

  describe('test for multiplication', () => {
    test('multiply 2 * 3 to equal 6', () => {
      const answer = multiplication(2, 3);
      expect(answer).toBe(6);
    });
  });

  describe('test for division', () => {
    // Test to function division with 3 different cases
    test('divide 10 / 5 to equal 2', () => {
      const answer = division(10, 5);
      expect(answer).toBe(2);

      const answer2 = division(5, 2);
      expect(answer2).toBe(2.5);

      const answer3 = division(5, 0);
      expect(answer3).toBeNull();
    });
  });
});
