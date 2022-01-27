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
    multiplyBySeven, multiplyBy12ThenHalve, addExclamationPoints, divideThenMultiply, returnAsAnArray,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 14;
    const expectedTwo = 35;
    const expectedThree = 21;

    const actual = multiplyBySeven(2);
    const actualTwo = multiplyBySeven(5);
    const actualThree = multiplyBySeven(3);

    expect.equal(actual, expected);
    expect.equal(actualTwo, expectedTwo);
    expect.equal(actualThree, expectedThree);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});



test('this test should pass', (expect) => {
    const expected = 12;
    const expectedTwo = 60;
    const expectedThree = 18;

    const actual = multiplyBy12ThenHalve(2);
    const actualTwo = multiplyBy12ThenHalve(10);
    const actualThree = multiplyBy12ThenHalve(3);

    expect.equal(actual, expected);
    expect.equal(actualTwo, expectedTwo);
    expect.equal(actualThree, expectedThree);
});


test('this test should pass', (expect) => {
    const expected = 'testing!!!';
    const expectedTwo = 'Hello World!!!';
    const expectedThree = 'Go Browns!!!';

    const actual = addExclamationPoints('testing');
    const actualTwo = addExclamationPoints('Hello World');
    const actualThree = addExclamationPoints('Go Browns');

    expect.equal(actual, expected);
    expect.equal(actualTwo, expectedTwo);
    expect.equal(actualThree, expectedThree);
});

test('this test should pass', (expect) => {
    const expected = 10;
    const expectedTwo = 6;
    const expectedThree = 21;

    const actual = divideThenMultiply(8, 4, 5);
    const actualTwo = divideThenMultiply(9, 3, 2);
    const actualThree = divideThenMultiply(6, 2, 7);

    expect.equal(actual, expected);
    expect.equal(actualTwo, expectedTwo);
    expect.equal(actualThree, expectedThree);
});

test('this test should pass', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.equal(actual, expected);
    expect.equal(actualTwo, expectedTwo);
    expect.equal(actualThree, expectedThree);
});

test('this test should pass', (expect) => {
    const expected = [8, 4, 5];

    //const expectedtwo = [];

    const actual = returnAsAnArray(8, 4, 5);
   // const actualtwo = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);
    //expect.deepEqual(actualtwo, expectedtwo);
});