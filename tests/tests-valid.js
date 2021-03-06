/* global jasmine, describe, it, expect */
import scenario from './data/scenarios-valid.js';

describe('The module function should not throw error and run callback function', function () {
  it('when the expected object is empty', function () {
    var actual = { name: 'Paul' };
    var expected = {};
    var clb = jasmine.createSpy('clb');
    var binded = this.type.bind(this, actual, expected);
    expect(this.type(actual, expected, clb)).toBe(true);
    expect(binded).not.toThrowError();
    expect(clb).not.toHaveBeenCalled();
  });
});

describe('The module function should not throw error and run callback function', function () {
  for (var i in scenario) {
    it(`when the arguments passed through function are correct and the validations has passed [Nb. ${i}]`, function () {
      var { actual, expected } = scenario[i];
      var clb = jasmine.createSpy('clb');
      var binded = this.type.bind(this, actual, expected);
      expect(this.type(actual, expected, clb)).toBe(true);
      expect(binded).not.toThrowError();
      expect(clb).not.toHaveBeenCalled();
    });
  }
});