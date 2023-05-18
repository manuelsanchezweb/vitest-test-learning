import { describe, it, expect } from 'vitest'
import { canReconfigure } from '../src/canReconfigure.js'

describe('canReconfigure', () => {
  it('should be a function', () => {
    // expect(typeof canReconfigure).toBe('function')
    expect(canReconfigure).toBeTypeOf('function')
  })

  // Podemos quitarnos este test, ya que el de abajo lo cubre
  // it('should throw if first parameter is missing', () => {
  //   expect(() => canReconfigure()).toThrow('First parameter is required')
  // })

  it('should throw if first parameter is not string', () => {
    expect(() => canReconfigure(2)).toThrow('First parameter is not string')
  })

  it('should throw if second parameter is not string', () => {
    expect(() => canReconfigure('a', 2)).toThrow(
      'Second parameter is not string'
    )
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('a', 'ab')).toBe(false)
  })

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings provided have different amount of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings have different order of transformations', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
