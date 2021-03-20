const fetchData = (cb) => {
  const val = "Data";
  cb(val);
};

it("Mock", () => {
  const cb = jest.fn();
  fetchData(cb);

  expect(cb).toHaveBeenCalled();
  expect(cb).toHaveBeenCalledTimes(1);
  expect(cb).toHaveBeenCalledWith("Data");
});

fit("done callback", (done) => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 3000);
});
