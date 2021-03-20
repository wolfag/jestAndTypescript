describe("Matcher", () => {
  it("object", () => {
    expect(1).toBe(1);
    expect("cat").toBe("cat");
    const a = { foo: "bar" };
    const b = { foo: "bar" };

    expect(a).toEqual(b);
    expect([]).toEqual([]);
    expect([]).not.toEqual([1]);

    expect(a).toHaveProperty("foo", "bar");

    const c = { foo: { num: 1 } };
    expect(c).toHaveProperty("foo", { num: 1 });
  });

  it("Promise", () => {
    const c = { foo: { num: 1 } };
    const p = new Promise((res) => {
      res(c);
    });
    expect(p).resolves.toEqual({ foo: { num: 1 } });

    const p2 = new Promise((res, rej) => {
      rej(c);
    });
    expect(p2).rejects.toEqual({ foo: { num: 1 } });
  });
});
