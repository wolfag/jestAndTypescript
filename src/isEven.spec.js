function plus(a, b) {
  return a + b;
}

function isEven(num) {
  return !Boolean(num % 2);
}

function calc(input) {
  const result = input.split(",").reduce(
    (acc, curr) => {
      if (!curr.trim()) {
        return acc;
      }
      const n = parseInt(curr, 10);
      if (n < 0) {
        return {
          sum: acc.sum,
          negatives: acc.negatives.concat(n),
        };
      }
      return {
        sum: acc.sum + n,
        negatives: acc.negatives,
      };
    },
    { sum: 0, negatives: [] }
  );
  if (result.negatives.length) {
    const msg = `Negative numbers not supported: ${result.negatives.join(
      ", "
    )}`;
    throw Error(msg);
  }
  return result.sum;
}

describe("isEven", () => {
  it("return true", () => {
    const result = isEven(2);
    expect(result).toBe(true);
  });
  it("return false", () => {
    const result = isEven(3);
    expect(result).toBe(false);
  });
});

describe("plus", () => {
  test.each([
    [0, 1, 1],
    [1, 3, 4],
    [-3, 4, 1],
  ])("plus(%i)", (a, b, result) => {
    const total = plus(a, b);
    expect(total).toBe(result);
  });
});

describe("calc", () => {
  it("adds up numbers", () => {
    const input = "1,2,3";
    const output = 6;
    expect(calc(input)).toBe(output);
  });
  it("consider whitespace", () => {
    const input = "1,  2,  3,   , ";
    const output = 6;
    expect(calc(input)).toBe(output);
  });
  it("consider negative numbers", () => {
    const input = "-1,  -2,  3,   , ";
    const subject = () => calc(input);
    expect(subject).toThrowError("Negative numbers not supported: -1, -2");
  });
});
