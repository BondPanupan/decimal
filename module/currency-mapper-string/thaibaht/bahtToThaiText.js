const Decimal = require('decimal.js');

function bahtToThaiText(value) {
  let amount = new Decimal(value).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
  return amount;
}

module.exports = {
  bahtToThaiText,
};