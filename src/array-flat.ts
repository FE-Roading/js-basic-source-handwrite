// 以下是三种数组扁平化的操作方法

// ES2019 flat
export function flatten(arr: unknown[]): unknown[] {
  return Array.prototype.flat.call(arr, Number.MAX_SAFE_INTEGER)
}

// ES6
export function flatten1(arr: Array<unknown>): unknown[] {
  while (arr.some(item => Array.isArray(item))) {
    arr = ([] as unknown[]).concat(...arr)
  }

  return arr
}

// 递归
export function flatten2(arr: Array<unknown>): unknown[] {
  let res: unknown[] = []
  for(let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flatten2(item))
    } else {
      res.push(item)
    }
  }

  return res
}

