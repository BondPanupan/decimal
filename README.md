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
├── module/
│   └── currency-mapper-string/
│       └── thaibaht/
│           └── bahtToThaiText.js
└── README.md
```
