var chai = require('chai');
var expect = chai.expect;
var CartSummary = require('./../../src/part1/cartSummary.js');

describe('CartSummary', function() {
  it('getSubtotal() should return 0 if no items are passed in', function() {
    var cartSummary = new CartSummary([]);
    expect(cartSummary.getSubtotal()).to.eq(0);
  });
});
