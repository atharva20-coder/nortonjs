const convertNumber = require("../functions/decimalConverter");

describe("convertNumber", () => {
  it("converts decimal to binary", () => {
    expect(convertNumber("10", 10, 2)).toBe("1010");
  });

  it("converts decimal to octal", () => {
    expect(convertNumber("42", 10, 8)).toBe("52");
  });

  it("converts decimal to hexadecimal", () => {
    expect(convertNumber("255", 10, 16)).toBe("FF");
  });

  it("converts binary to decimal", () => {
    expect(convertNumber("1010", 2, 10)).toBe(10);
  });

  it("converts octal to decimal", () => {
    expect(convertNumber("52", 8, 10)).toBe(42);
  });

  it("converts hexadecimal to decimal", () => {
    expect(convertNumber("FF", 16, 10)).toBe(255);
  });

  it("throws an error for invalid input or output base", () => {
    expect(() => convertNumber("10", 7, 2)).toThrowError(
      "Invalid input or output base"
    );
  });
});
