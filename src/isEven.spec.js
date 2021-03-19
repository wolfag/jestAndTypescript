function plus(a, b) {
  return a + b;
}

function isEven(num) {
  return !Boolean(num % 2);
}

describe("isEven", () => {
  it("return true", () => {
    const result = isEven(2);

    expect(result).toBe(true);
  });

  test.each([
    [0, 1, 1],
    [1, 3, 4],
    [-3, 4, 1],
  ])("plus(%i)", (a, b, result) => {
    const total = plus(a, b);
    expect(total).toBe(result);
  });
});
