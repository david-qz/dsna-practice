import {
    arrayLength,
    firstKeyLastValue,
    inventoryChecker,
    thirdItem,
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

test('arrayLength()', expect => {
    expect.equal(
        arrayLength([]),
        0,
        'Empty array has zero length.'
    );

    expect.equal(
        arrayLength([1, 2, 3, 4]),
        4,
        'Array with 4 items has length=4.'
    );

    expect.equal(
        arrayLength(4),
        undefined,
        'Non-array types have undefined length.'
    );

    expect.equal(
        arrayLength('oops'),
        undefined,
        'Does not coerce types.'
    );
});

test('thirdItem()', expect => {
    expect.equal(
        thirdItem([]),
        undefined,
        'Third item in empty array is undefined.'
    );

    expect.equal(
        thirdItem([1, 2, 3, 4, 5, 6]),
        3,
        'Third item in sorted Z+ array is 3.'
    );

    expect.equal(
        thirdItem(4),
        undefined,
        'Third item in non-array is undefined.'
    );

    expect.equal(
        thirdItem('oops'),
        undefined,
        'Does not coerce types.'
    );
});

test('firstKeyLastValue()', expect => {
    expect.deepEqual(
        firstKeyLastValue({}),
        {
            firstKey: undefined,
            lastValue: undefined,
        },
        'Empty object has undefined keys and values.'
    );

    expect.deepEqual(
        firstKeyLastValue({
            firstKey: 'firstValue',
            secondKey: 'secondValue',
            thirdKey: 'thirdValue',
            fourthKey: 'fourthValue',
        }),
        {
            firstKey: 'firstKey',
            lastValue: 'fourthValue',
        },
        'Typical case.'
    );

    expect.deepEqual(
        firstKeyLastValue(4),
        {
            firstKey: undefined,
            lastValue: undefined,
        },
        'Non-object has undefined keys and values.'
    );

    expect.deepEqual(
        firstKeyLastValue('oops'),
        {
            firstKey: undefined,
            lastValue: undefined,
        },
        'Does not coerce types.'
    );

    expect.deepEqual(
        firstKeyLastValue({
            name: 'felix',
            type: 'cat',
            food: 'tuna',
            age: 6,
        }),
        {
            firstKey: 'name',
            lastValue: 6
        },
        'Marty\'s test.'
    );
});

test('inventoryChecker()', expect => {
    const inventory = {
        apples: 5,
        sugar: 10,
        tea: 2,
        water: 6,
    };

    expect.equal(
        inventoryChecker(inventory, { itemName: 'tea' }),
        'running low on tea',
        'Running low.'
    );

    expect.equal(
        inventoryChecker(inventory, { itemName: 'sugar' }),
        'plenty of inventory',
        'Plentiful.'
    );

    expect.equal(
        inventoryChecker(inventory, { itemName: 'water' }),
        'plenty of inventory',
        'One unit above threshold.'
    );

    expect.equal(
        inventoryChecker(inventory, { itemName: 'apples' }),
        'running low on apples',
        'One unit below threshold.'
    );
});
