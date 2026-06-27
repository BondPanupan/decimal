'use strict';

const Decimal = require('decimal.js');
const { bahtToThaiText } = require('./module/currency-mapper-string/thaibaht/bahtToThaiText');

function main() {
  const inputs = [
    new Decimal(1234),
    new Decimal('33333.756')
  ];

  console.log('original', inputs);
  for (const input of inputs) {

    const result = bahtToThaiText(input);

    console.log('\n');
    console.log('original: ', input.toString());
    console.log('Thai text format: ', result);
    
  }
}

main();