import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize(''), '');
console.log('You passed 1 test!');
assert.strictEqual(capitalize('hello'), 'Hello');
console.log('You passed 2 tests!');
assert.strictEqual(capitalize('hello'), 'hello'); // err
console.log('Greeting!\nYou passed all tests!');
