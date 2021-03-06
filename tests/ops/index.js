module.exports = {
    test01: () => {
        return { status: true, result: 'hello world' };
    },
    test02: () => {
        console.log('TEST', ' simple unsigned addition (two numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = Number.getNumber('13.1234567890');
        let n2 = Number.getNumber('92.2345678901');
        let sum = ops.sum([n1, n2]);
        return { status: true, result: { sum } };
    },
    test03: () => {
        console.log('TEST', ' simple unsigned addition (one number)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = Number.getNumber('13.1234567890');
        let sum = ops.sum([n1]);
        return { status: true, result: { sum } };
    },
    test04: () => {
        console.log('TEST', ' simple unsigned addition (no numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let sum = ops.sum([]);
        return { status: true, result: { sum } };
    },
    test05: () => {
        console.log('TEST', ' minimum of two numbers ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = Number.getNumber('3.2345678901');
        let n2 = Number.getNumber('-13.1234567890');

        let arr = [n1, n2];
        // console.log('minimum of (', n2._getValue(), ',', n1._getValue(), '):', arr[ops.minimum(arr, false)]._getValue());

        return { status: true, result: arr[ops.minimum(arr)] };
    },
    test06: () => {
        console.log('TEST', ' simple unsigned subtraction (two numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n1 = Number.getNumber('10.1234567890');
        let n2 = Number.getNumber('20.2345678901');
        let sum = ops.subtraction(n2, n1);
        return { status: true, result: { sum } };
    },
    test07: () => {
        console.log('TEST', ' zero - number');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = Number.getZeros(null, 1, 1);
        console.log('zero: ', n1);
        let n2 = Number.getNumber('92.2345678901');
        let sum = ops.subtraction(n1, n2);
        return { status: true, result: { sum } };
    },
    test08: () => {
        console.log('TEST', 'result zero ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = Number.getNumber('10.1');
        let n2 = Number.getNumber('10.1');
        let sum = ops.subtraction(n1, n2);
        return { status: true, result: { sum } };
    },
    test09: () => {
        console.log('TEST', ' maximum of two numbers ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = Number.getNumber('-3.2345678901');
        let n2 = Number.getNumber('13.1234567890');

        let arr = [n1, n2];
        // console.log('maximum of (', n2._getValue(), ',', n1._getValue(), '):', arr[ops.maximum(arr)]._getValue());

        return { status: true, result: arr[ops.maximum(arr, true)] };
    },
    test10: () => {
        console.log('TEST', ' equivalence of two numbers ');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');

        let n1 = Number.getNumber('3.2345678901');
        let n2 = Number.getNumber('13.1234567890');
        // let n2 = Number.getNumber('3.2345678901');

        let arr = [n1, n2];
        // console.log('Are ', n2._getValue(), ' & ', n1._getValue(), ' equal?');
        let result = ops.areEqual(arr, false);
        // console.log(result ? 'Yes' : 'No');

        return { status: true, result: ops.areEqual(arr, true) };
    },
    test11: () => {
        console.log('TEST', ' simple signed subtraction (two numbers)');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations');
        let n2 = Number.getNumber('-10.1234567890');
        let n1 = Number.getNumber('-20.2345678901');
        let sum = ops.subtraction(n1, n2);
        return { status: true, result: { sum } };
    },
    test12: () => {
        console.log('TEST', ' multiplication table of 1 to 10, in base 10');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations/');
        const { eBase } = require('../../module/type/base');
        let Ten = eBase.A;
        let tables = [];
        for (let num = 1; num < Ten.value; ++num) {
            let table = Number.getNumber(num + '', Ten);
            table = ops.prepareMultiplicationTable(table);
            for (let index2 = 0; index2 < table.length; index2++) {
                const element = table[index2];
                // console.log(element._value);
                if (index2 == table.length - 1) {
                    tables.push(table);
                }
            }
            // console.log('..');
            if (num == Ten.value - 1) {
                return { status: true, result: tables };
            }
        }
    },
    test13: () => {
        console.log('TEST', ' multiplication of two numbers, in base 10');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations/');
        const { eBase } = require('../../module/type/base');

        let n2 = Number.getNumber('110');
        let n1 = Number.getNumber('11');

        let result = ops.multiplication(n2, n1);
        result._trimZero();
        // console.log(`multiplication ${n1._value}*${n2._value} = ${result._value}`);

        return { status: true, result: result };
    },
    test14: () => {
        console.log('TEST', ' multiplication of numbers (1 to 10) in an array, in base 10');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations/');
        const { eBase } = require('../../module/type/base');

        let numbers = [
            Number.getNumber('1'),
            Number.getNumber('2'),
            Number.getNumber('3'),
            Number.getNumber('4'),
            Number.getNumber('5'),
            Number.getNumber('6'),
            Number.getNumber('7'),
            Number.getNumber('8'),
            Number.getNumber('9'),
            Number.getNumber('10'),
        ];

        let result = ops.multiply(numbers);
        result._trimZero();
        // console.log(`multiplication ${n1._value}*${n2._value} = ${result._value}`);

        return { status: true, result: result, formattedValue:result._getFormattedValue() };
    },
    test15: () => {
        console.log('TEST', 'division and remainder of two numbers, in base 10');
        let Number = require('../../module/type/index');
        const ops = require('../../module/operations/');
        const { eBase } = require('../../module/type/base');

        let n2 = Number.getNumber('22');
        let n1 = Number.getNumber('7');

        let division = ops.division(n2, n1);
        division.division._trimZero();
        division.remainder._trimZero();

        return { status: true, result: division };
    },
}