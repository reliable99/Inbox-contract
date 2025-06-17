const assert = require('assert');
const ganache = require ('ganache-cli');
const Web3 = require ('web3');  // constructor
const web3 = new Web3(ganache.provider()); // instance
// Mocha is a test runnning frame work, we can use it to test any javascript code, frontend, backend and ethereum code.
// three functions to understand forus to work with mocha 

// 1. IT : to run a test and make an assertion
// 2. describe: Groups together 'it' functions
// beforeEach: Execute some general setup code.



class Car {
    park() {
        return 'stop';
    }

    drive() {
        return 'vroom';
    }
}

let car;
beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.strictEqual(car.park(), 'stop');
    });

    it('can drive', () => {
        assert.strictEqual(car.drive(), 'vroom');
    });
});