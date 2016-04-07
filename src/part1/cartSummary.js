function CartSummary(items) {
  this._items = items;
}

CartSummary.prototype.getSubtotal = function() {
  return 0;
};

module.exports = CartSummary;
