// IMPORT MODULES under test here:
/*import { 
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});*/

import { 
    multiplyBySeven, multiplyBy12ThenHalve, addExclamationPoints,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 14;

    const actual = multiplyBySeven(2);

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});



test('this test should pass', (expect) => {
    const expected = 12;

    const actual = multiplyBy12ThenHalve(2);

    expect.equal(actual, expected);
});


test('this test should pass', (expect) => {
    const expected = 'testing!!!';

    const actual = addExclamationPoints('testing');

    expect.equal(actual, expected);
});