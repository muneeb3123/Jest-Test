const reverseString = require('./reverseString');

test('it should return reverse of the string' , () => {
    expect(reverseString('str')).toBe('rts');
})
test('reverseString function reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
  });