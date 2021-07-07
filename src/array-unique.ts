// 数组去重的方法定义

export function unique(arr: unknown[]): unknown[]{
  return Array.from(new Set(arr))
}

export function unique1(arr: unknown[]): unknown[]{
  return arr.filter((val, index, array) => array.indexOf(val) === index)
}
