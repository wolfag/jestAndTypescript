expect.extend({
  toBeWithin(rec: number, floor: number, ceil: number) {
    const pass = rec >= floor && rec <= ceil;
    const message = pass
      ? ""
      : `Value ${rec} expected to be within ${floor} - ${ceil}`;
    return {
      pass,
      message: () => message,
    };
  },
});

it("matcher", () => {
  /**
   * toBeWithin was not warning by ts config, the step will be:
   * run: yarn tsc --init
   * edit tsconfig.json: "types": ["jest", "./global.d.ts"],
   * touch global.d.ts
   */
  expect(10).toBeWithin(0, 20);
  expect(30).toBeWithin(0, 20);
});
