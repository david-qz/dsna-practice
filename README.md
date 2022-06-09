# Data Structures and Algorithms

To add a new topic:

1. Create a new folder based on the topic, like `operators`
1. Create two files:
    1. `operators.js` - has the code that will be tested
    1. `operators.test.js` - has the tests for that code

Your project should now have these files and folder:

```
operators
    |- operators.js
    |- operators.tests.js
```

Add the import for the test file into `tests.js`:

```js
import './operators/operators.test.js';
```

See [these instructions](tdd-qunit.md) for writing tests