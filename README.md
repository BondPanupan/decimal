# decimal

A Node.js utility that converts numeric values (baht amounts) into Thai text format using `decimal.js` for precise decimal handling.

## Features

- Converts integers and decimal numbers to Thai baht text
- Handles negative values
- Supports satang (สตางค์) for fractional parts
- Uses `decimal.js` to avoid floating-point precision issues

## Installation

```bash
npm install
```

## Usage

```js
const Decimal = require('decimal.js');
const { bahtToThaiText } = require('./module/currency-mapper-string/thaibaht/bahtToThaiText');

bahtToThaiText(new Decimal(1234));       // หนึ่งพันสองร้อยสามสิบสี่บาทถ้วน
bahtToThaiText(new Decimal('33333.756')); // สามหมื่นสามพันสามร้อยสามสิบสามบาทเจ็ดสิบหกสตางค์
bahtToThaiText(new Decimal(-10.5));      // ลบสิบบาทห้าสิบสตางค์
```

## Run

```bash
node index.js
```

## Testing

No test framework required — tests run with Node.js built-in `assert`.

```bash
node test.js
```

### Test Cases Covered

| Input | Expected Output |
|-------|----------------|
| `1234` | หนึ่งพันสองร้อยสามสิบสี่บาทถ้วน |
| `33333.75` | สามหมื่นสามพันสามร้อยสามสิบสามบาทเจ็ดสิบห้าสตางค์ |
| `11` | สิบเอ็ดบาทถ้วน |
| `20` | ยี่สิบบาทถ้วน |
| `1000000` | หนึ่งล้านบาทถ้วน |
| `1000000000000` | หนึ่งล้านล้านบาทถ้วน |
| `0.5` | ห้าสิบสตางค์ |
| `0.01` | หนึ่งสตางค์ |
| `0` | ศูนย์บาทถ้วน |
| `-25.50` | ลบยี่สิบห้าบาทห้าสิบสตางค์ |

Tests cover: เอ็ด/ยี่สิบ rules, stacked ล้าน, satang edge cases, rounding, and negative values.

## Example Output

```
original [ 1234, 33333.756, -10.5 ]

original:  1234
Thai text format:  หนึ่งพันสองร้อยสามสิบสี่บาทถ้วน

original:  33333.756
Thai text format:  สามหมื่นสามพันสามร้อยสามสิบสามบาทเจ็ดสิบหกสตางค์

original:  -10.5
Thai text format:  ลบสิบบาทห้าสิบสตางค์
```

## Project Structure

```
decimal/
├── index.js
├── test.js
├── module/
│   └── currency-mapper-string/
│       └── thaibaht/
│           └── bahtToThaiText.js
└── README.md
```
