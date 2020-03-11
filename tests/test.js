const test = require('ava');

const { default: a } = require('../dist/index');

test('日期类型转换成时间戳 YYYY/MM/DD', (t) => {
	t.is(a('2020/01/01', 'YYYY/MM/DD'), 1577808000000);
});

test('日期类型转换成时间戳 YYYY-MM-DD', (t) => {
	t.is(a('2020-01-01', 'YYYY-MM-DD'), 1577808000000);
});

test('日期类型转换成时间戳 YYYY-M-D', (t) => {
	t.is(a('2020-1-1', 'YYYY-M-D'), 1577808000000);
});
