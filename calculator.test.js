const Calculator = require('./calculator');

describe("Calculator", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(new Calculator().add(2, 3)).toBe(5);
    });

    test("adds a positive and a negative number", () => {
      expect(new Calculator().add(2, -3)).toBe(-1);
    });

    test("adds two negative numbers", () => {
      expect(new Calculator().add(-2, -3)).toBe(-5);
    });
  });

  describe("subtract", () => {
    test("subtracts a smaller positive number from a larger positive number", () => {
      expect(new Calculator().subtract(5, 2)).toBe(3);
    });

    test("subtracts a positive number from a negative number", () => {
      expect(new Calculator().subtract(-2, 3)).toBe(-5);
    });

    test("subtracts two negative numbers", () => {
      expect(new Calculator().subtract(-2, -3)).toBe(1);
    });
  });

  describe("divide", () => {
    test("divides a positive number by a smaller positive number", () => {
      expect(new Calculator().divide(6, 3)).toBe(2);
    });

    test("divides a negative number by a positive number", () => {
      expect(new Calculator().divide(-6, 3)).toBe(-2);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => new Calculator().divide(6, 0)).toThrowError(
        "Cannot divide by zero"
      );
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {
      expect(new Calculator().multiply(2, 3)).toBe(6);
    });

    test("multiplies a positive and a negative number", () => {
      expect(new Calculator().multiply(2, -3)).toBe(-6);
    });

    test("multiplies two negative numbers", () => {
      expect(new Calculator().multiply(-2, -3)).toBe(6);
    });
  });
});
