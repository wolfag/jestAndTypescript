function plus(a, b) {
  return a + b;
}

function isEven(num) {
  return !Boolean(num % 2);
}

function calc(input) {
  const arr = input.split(",");
  const negatives = [];
  let sum = 0;
  for (const num of arr) {
    let n = num.trim();
    if (n) {
      n = parseInt(n, 10);
      if (n > 0) {
        sum += n;
      } else {
        negatives.push(n);
      }
    }
  }
  if (negatives.length) {
    const msg = `Negative numbers not supported: ${negatives.join(", ")}`;
    throw Error(msg);
  }
  return sum;
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
