describe("sample test 101", () => {
  xit("works as expected", () => {
    const age = 100;
    expect(age).toEqual(100);
  });

  xit("handles ranges just fine", () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });
});
