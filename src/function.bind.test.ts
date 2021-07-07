// call implement
Function.prototype.mineBind = function(context: Record<string, any> | null) {
  if (!context) {
    context = window
  }

  const fnKey = '__bind'
  context[fnKey] = this  // this 是指向当前被调用call的函数

  // @ts-ignore
  return function(...args) {
    // @ts-ignore
    return context[fnKey](...args)
  }
}


describe('function bind test', () => {
  const testArr = Array.prototype.join.mineBind([1, 2, 3])

  it('Array join test: ', () => {
    expect(testArr(' ')).toBe('1 2 3')
  })

  function testCall(a: number, b: number): number {
    // @ts-ignore
    return this.a + this.b + a + b
  }
  const testFunc = testCall.mineBind({ a: 1, b: 2 })

  it('custom func test: ', () => {
    expect(testFunc(1, 3)).toBe(7)
  })
})


