import { flatten, flatten1, flatten2  } from './array-flat'

describe('array-flat', () => {

  const emptyArr: unknown[] = []
  it('flatten: should be an empty array', () => {
    const arr = flatten(emptyArr)

    expect(arr.length).toBe(0)
  })
  it('flatten1: should be an empty array', () => {
    const arr = flatten1(emptyArr)

    expect(arr.length).toBe(0)
  })
  it('flatten2: should be an empty array', () => {
    const arr = flatten2(emptyArr)

    expect(arr.length).toBe(0)
  })

  const arr1: any[] = [1, 2, 3, 4]
  it('flatten: array length should be 4', () => {
    const arr = flatten(arr1)

    expect(arr.length).toBe(arr1.length)
  })
  it('flatten1: array length should be 4', () => {
    const arr = flatten1(arr1)

    expect(arr.length).toBe(arr1.length)
  })
  it('flatten2: array length should be 4', () => {
    const arr = flatten2(arr1)

    expect(arr.length).toBe(arr1.length)
  })

  const arr2: any[] = [1, 'dfsdf', [], ['a', 1, ['d']], 4]
  it('flatten: array length should be 6', () => {
    const arr = flatten(arr2)

    expect(arr.length).toBe(6)
  })
  it('flatten1: array length should be 6', () => {
    const arr = flatten1(arr2)

    expect(arr.length).toBe(6)
  })
  it('flatten2: array length should be 6', () => {
    const arr = flatten2(arr2)

    expect(arr.length).toBe(6)
  })
})
