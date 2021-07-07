import { curry } from './function'

describe('function curry test', () => {

  function curryFn(a: number, b: number, c: number): number | string {
    return a + b + c
  }
  const curriedFn = curry(curryFn)

  it('curry number test', () => {
    expect(curriedFn(1)(2)(3)).toBe(6)
  })

  it('curry string test', () => {
    expect(curriedFn('1')(2)(3)).toBe('123')
  })

})
