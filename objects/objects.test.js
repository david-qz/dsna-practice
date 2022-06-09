import {
    makePet,
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('makePet() factory', expect => {
    const actual = makePet('felix', 'cat', 6, 'tuna', ['feather chaser', 'laser pointer', 'ball of yarn']);

    expect.deepEqual(actual, {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn']
    });
});
