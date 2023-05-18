import { describe, it, expect } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

//  Escribir una funcion que al pasarle un numero:
//  - Muestra 'fizz' si es multiplo de 3
//  - Muestra 'buzz' si es multiplo de 5
//  - Muestra 'fizzBuzz' si es multiplo de 3 y 5
//  - Muestra el numero si no es multiplo de 3 ni de 5

// En TDD se suele empezar por los casos mas simples
// Se suele escribir justo lo que necesitamos para conseguir la solucion

describe('fizzbuzz', () => {
  // Este test es redundante, ya que el test de abajo lo cubre
  // Por eso, una vez que el test de abajo pasa, podemos quitar este
  // Los tests deben irse apagando a medida que se van cubriendo
  //   it('should be a function', () => {
  //     expect(typeof fizzbuzz).toBe('function')
  //   })

  it('should throw if no number is passed', () => {
    expect(() => fizzbuzz()).toThrow('No number passed')
  })

  it('should throw if number is not a number', () => {
    expect(() => fizzbuzz(NaN)).toThrow('Not a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return Fizz if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return Fizz if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  //   Si tenemos un test que ya nos pasa en verde, podemos quitarlo
  //   it('should return 4 if number provided is 4', () => {
  //     expect(fizzbuzz(4)).toBe(4)
  //   })

  it('should return Buzz if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return Buzz if number provided is multiple of 5', () => {
    expect(fizzbuzz(25)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
  })

  it('should return FizzBuzz if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })

  it('should return Woff if number provided is multiple of 7', () => {
    expect(fizzbuzz(7)).toBe('woff')
    expect(fizzbuzz(14)).toBe('woff')
  })
})
