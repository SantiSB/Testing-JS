// Describe
describe('group 1', () => {
  // Runs before every test
  beforeAll(() => {
    console.log('beforeAll');
  });

  // Runs after every test
  afterAll(() => {
    console.log('afterAll');
  });

  // Runs before each test
  beforeEach(() => {
    console.log('beforeEach');
  });

  // Runs after each test
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  // Describe 2
  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll 2');
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
