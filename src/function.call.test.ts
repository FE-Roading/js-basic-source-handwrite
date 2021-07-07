// call implement
Function.prototype.mineCall = function(context: Record<string, any> | null) {
  if (!context) {
    context = window
  }

  const fnKey = '__call'
  context[fnKey] = this  // this 是指向当前被调用call的函数

  let res: any
  if (arguments.length > 1) {
    res = context[fnKey](...Array.from(arguments).slice(1))
  } else {
    res = context[fnKey]()
  }

  delete context[fnKey]

  return res
}


describe('function call test', () => {
  it('Array join test: ', () => {
    expect(Array.prototype.join.mineCall([1, 2, 3], ' ')).toBe('1 2 3')
  })

  // @ts-ignore
  window.a = 1
  // @ts-ignore
  window.b = 2
  function testCall(a: number, b: number): number {
    // @ts-ignore
    return this.a + this.b + a + b
  }

  it('custom func test: ', () => {
    expect(testCall.mineCall(null, 1, 2)).toBe(6)
  })
})


