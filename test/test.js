"use strict";

const expect = require("chai").expect;
const index = require("../dist/index.js");

describe("expression evaluation", () => {
  it("Should return the proper format for time", () => {
    const result = index.evaluateTimeExpression("1h1m1s");
    expect(result).to.equal("1h1m1s");

    const nothing = index.evaluateTimeExpression("0s");
    expect(nothing).to.equal("0s");
  });

  it("Should properly convert seconds to minutes and minutes to hours", () => {
    let result = index.evaluateTimeExpression("60s");
    expect(result).to.equal("1m");

    result = index.evaluateTimeExpression("60m");
    expect(result).to.equal("1h");

    result = index.evaluateTimeExpression("3661s");
    expect(result).to.equal("1h1m1s");
  });

  it("Should properly evaluate addition expressions", () => {
    let result = index.evaluateTimeExpression("1s+1s");
    expect(result).to.equal("2s");

    result = index.evaluateTimeExpression("1h + 1h");
    expect(result).to.equal("2h");

    result = index.evaluateTimeExpression("1h + 60m");
    expect(result).to.equal("2h");
  });

  it("Should properly evaluate subtraction expressions", () => {
    let result = index.evaluateTimeExpression("2s - 1s");
    expect(result).to.equal("1s");

    result = index.evaluateTimeExpression("2h - 1s");
    expect(result).to.equal("1h59m59s");
  });

  it("Should properly evaluate multiplication expressions", () => {
    let result = index.evaluateTimeExpression("1h*2");
    expect(result).to.equal("2h");

    result = index.evaluateTimeExpression("40m*3");
    expect(result).to.equal("2h");
  });

  it("Should properly evaluate division expressions", () => {
    let result = index.evaluateTimeExpression("2h/2");
    expect(result).to.equal("1h");

    result = index.evaluateTimeExpression("60m/2");
    expect(result).to.equal("30m");

    result = index.evaluateTimeExpression("1h/2");
    expect(result).to.equal("30m");
  });
});
