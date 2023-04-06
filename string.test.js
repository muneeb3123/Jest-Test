const stringLength = require('./string.js');

test('stringlength shows an error when it is too small' , () => {
    expect(() => {
        stringLength('');
      }).toThrow('String is too small');
});

test('returns the correct length with one character' , () => {

    expect(stringLength('a')).toBe(1);
});

test('returns the correct length with five character' , () => {

    expect(stringLength('hello')).toBe(5);
});

test('returns the correct length with ten character' , () => {

    expect(stringLength('1234567890')).toBe(10);
});

test('stringLength throws an error when string is too long', () => {

    expect(() => {
             stringLength('thisstringistoolong');
        }).toThrow('String is too long');
});