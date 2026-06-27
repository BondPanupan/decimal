'use strict';

// Lightweight tests — run with: node test.js  (no test framework required)
const assert = require('assert');
const Decimal = require('decimal.js');
const { bahtToThaiText } = require('./module/currency-mapper-string/thaibaht/bahtToThaiText');
// const { bahtToThaiText } = require('./src/thaiBaht');

const cases = [
  // Spec examples
  ['1234', 'หนึ่งพันสองร้อยสามสิบสี่บาทถ้วน'],
  ['33333.75', 'สามหมื่นสามพันสามร้อยสามสิบสามบาทเจ็ดสิบห้าสตางค์'],

  // เอ็ด / ยี่สิบ / สิบ rules
  ['1', 'หนึ่งบาทถ้วน'],
  ['11', 'สิบเอ็ดบาทถ้วน'],
  ['20', 'ยี่สิบบาทถ้วน'],
  ['21', 'ยี่สิบเอ็ดบาทถ้วน'],
  ['101', 'หนึ่งร้อยเอ็ดบาทถ้วน'],

  // Millions / stacked ล้าน
  ['1000000', 'หนึ่งล้านบาทถ้วน'],
  ['1234567', 'หนึ่งล้านสองแสนสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน'],
  ['1000000000000', 'หนึ่งล้านล้านบาทถ้วน'],

  // Satang handling
  ['0.75', 'เจ็ดสิบห้าสตางค์'],
  ['0.5', 'ห้าสิบสตางค์'],      // .5 must mean 50 satang, not 5
  ['0.01', 'หนึ่งสตางค์'],
  ['0.21', 'ยี่สิบเอ็ดสตางค์'],
  ['0', 'ศูนย์บาทถ้วน'],
  ['100.50', 'หนึ่งร้อยบาทห้าสิบสตางค์'],

  // Rounding to 2 dp (banker-agnostic half-up here)
  ['1.005', 'หนึ่งบาทหนึ่งสตางค์'],

  // Negative
  ['-25.50', 'ลบยี่สิบห้าบาทห้าสิบสตางค์'],
];

console.clear();
let passed = 0;
for (const [input, expected] of cases) {
  const got = bahtToThaiText(new Decimal(input));

  const response = {
    input,
    got
  }
  console.log('response', JSON.stringify(response, null, 2));
  assert.strictEqual(got, expected, `\n  input:    ${input}\n  expected: ${expected}\n  got:      ${got}`);
  passed++;
}

console.log(`All ${passed} tests passed.`);