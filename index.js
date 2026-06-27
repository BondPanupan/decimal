'use strict';

const Decimal = require('decimal.js');

function main() {
  const inputs = [
    new Decimal(1234),
    new Decimal('33333.75')
  ];

  console.log('original', inputs);
  for (const input of inputs) {
    console.log(input.toString());
  }
}

main();