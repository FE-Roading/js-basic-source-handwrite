import { unique, unique1  } from './array-unique'

describe('array-unique', () => {

  const emptyArr: unknown[] = []
  it('unique: should be an empty array', () => {
    const arr = unique(emptyArr)

    expect(arr.length).toBe(0)
  })
  it('unique1: should be an empty array', () => {
    const arr = unique1(emptyArr)

    expect(arr.length).toBe(0)
  })

  const arr1: any[] = [1, 2, 1, 'dd', 'dd']
  it('unique: array length should be 3', () => {
    const arr = unique(arr1)

    expect(arr.length).toBe(3)
  })
  it('unique1: array length should be 3', () => {
    const arr = unique1(arr1)

    expect(arr.length).toBe(3)
  })
})
