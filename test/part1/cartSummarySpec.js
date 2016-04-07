var chai = require('chai');
var expect = chai.expect;
var CartSummary = require('./../../src/part1/cartSummary.js');

describe('CartSummary', function() {
  it('getSubtotal() should return 0 if no items are passed in', function() {
    var cartSummary = new CartSummary([]);
    expect(cartSummary.getSubtotal()).to.eq(0);
  });

  it ('getSubtotal() should return the sum of the price * quantity for all items', function() {
    var cartSummary = new CartSummary([{
      id: 1,
      quantity: 4,
      price: 50
    }, {
      id: 2,
      quantity: 2,
      price: 30
    }, {
      id: 3,
      quantity: 1,
      price: 40
    }]);

    expect(cartSummary.getSubtotal()).to.eq(300);
  });
});
