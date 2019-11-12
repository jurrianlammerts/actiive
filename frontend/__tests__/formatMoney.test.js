import formatMoney from "../lib/formatMoney";

describe("formatMoney Function", () => {
  it("Works with fractional dollars", () => {
    expect(formatMoney(1)).toEqual("$0.01");
    expect(formatMoney(10)).toEqual("$0.10");
    expect(formatMoney(9)).toEqual("$0.09");
  });

  it("leaves cents off whole dollars", () => {
    expect(formatMoney(5000)).toEqual("$50");
  });
});
