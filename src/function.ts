// function curry: 函数柯里化
export function curry(fn: Function): CallableFunction {
  // @ts-ignore
  let judge = function(...args) {
    if (args.length === fn.length) return fn(...args)

    // @ts-ignore
    return (...arg) => judge(...args, ...arg)
  }

  return judge
}



