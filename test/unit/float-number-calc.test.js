/* eslint-disable no-undef */
import assert from 'assert'
import calc from '../../src/index'

describe('float-number-calc test case', () => {
  it('add', () => {
    assert.equal(calc.add('0.01', '9.99'), '10.00')
  })

  it('sub', () => {
    assert.equal(calc.sub('10.00', '0.01'), '9.99')
  })

  it('mul', () => {
    assert.equal(calc.mul('1.11', '9'), '9.99')
  })

  it('div', () => {
    assert.equal(calc.div('9.99', '9'), '1.11')
  })
})
