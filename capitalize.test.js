const capitalize = require('./capitalize');

test('capitalize function capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  