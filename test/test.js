"use strict";

const expect = require("chai").expect;
const index = require("../dist/index.js");

describe("Time Calculation expression evaluating", () => {
  it("should return a time in the proper notation", () => {
    const result = index.evaluateTimeExpression("1h6m15s");
    expect(result).to.equal("1h6m15s");
  });

  it("should return properly formatted time", () => {
    const result = index.evaluateTimeExpression("3661s");
    expect(result).to.equal("1h1m1s");
  });

  it("Should properly evaluate addition expressions", () => {
    let result = index.evaluateTimeExpression("1s + 1s");
    expect(result).to.equal("2s");

    result = index.evaluateTimeExpression("1h + 1h");
    expect(result).to.equal("2h");

    result = index.evaluateTimeExpression("1h + 60m");
    expect(result).to.equal("2h");
  });

  it("Should properly evaluate subtraction expressions", () => {});
  it("Should properly evaluate multiplication expressions", () => {});
  it("Should properly evaluate division expressions", () => {});
});
