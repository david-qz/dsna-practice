// IMPORT MODULES under test here:
import {
    add,
} from './operators.js';

const test = QUnit.test;

test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const y = 5;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
