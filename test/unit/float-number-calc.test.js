// import { add, sub, mul, div } from '../../src/index'
// const assert = require('assert')
// const { add, sub, mul, div } = require('../../dist/float-number-calc')
import assert from 'assert'
import { add, sub, mul, div } from '../../src/index'

describe('float-number-calc test case', () => {
    it('add', () => {
        assert.equal(add('0.01', '9.99'), '10.00')
    });

    it('sub', () => {
        assert.equal(sub('10.00', '0.01'), '9.99')
    });

    it('mul', () => {
        assert.equal(mul('1.11', '9'), '9.99')
    });

    it('div', () => {
        assert.equal(div('9.99', '9'), '1.11')
    });
});