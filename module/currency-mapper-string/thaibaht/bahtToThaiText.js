const Decimal = require('decimal.js');

const DIGITS = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
const PLACES = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน'];

function hasHigherNonZero(group, unitsIndex) {
  for (let j = 0; j < unitsIndex; j++) {
    if (group[j] !== '0') return true;
  }
  return false;
}

function readGroup(group) {
  let out = '';
  const len = group.length;

  for (let i = 0; i < len; i++) {
    const d = group.charCodeAt(i) - 48;
    const place = len - i - 1;
    if (d === 0) continue;

    if (place === 1) {
      if (d === 1) out += 'สิบ';
      else if (d === 2) out += 'ยี่สิบ';
      else out += DIGITS[d] + 'สิบ';
    } else if (place === 0) {
      if (d === 1 && hasHigherNonZero(group, i)) out += 'เอ็ด';
      else out += DIGITS[d];
    } else {
      out += DIGITS[d] + PLACES[place];
    }
  }
  return out;
}

function readbaht(intStr) {
  const trimmed = intStr.replace(/^0+/, '');
  if (trimmed === '') return DIGITS[0];

  if (trimmed.length <= 6) return readGroup(trimmed);

  const head = trimmed.slice(0, trimmed.length - 6);
  const tail = trimmed.slice(trimmed.length - 6);
  return readbaht(head) + 'ล้าน' + readGroup(tail);
}

function bahtToThaiText(value) {
  let amount = new Decimal(value).toDecimalPlaces(2, Decimal.ROUND_HALF_UP);

  // check negative value of amount
  const negative = amount.isNegative();
  amount = amount.abs();

  const baht = amount.floor();
  const satang = amount.minus(baht).times(100).round().toNumber();

  const bahtText = readbaht(baht.toFixed(0));

  console.log('debug', {
    baht,
    satang,
    bahtText,
  })


  return amount;
}

module.exports = {
  bahtToThaiText,
};