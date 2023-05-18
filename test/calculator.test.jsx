import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Calculator, operations, numbers } from '../src/Calculator'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)

    numbers.forEach((number) => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)

    // Los selectores pueden cambiar, por eso es mejor usar roles
    const rows = screen.getAllByTestId('row')
    expect(rows).toHaveLength(4)
  })

  it('should render operations', () => {
    render(<Calculator />)

    operations.forEach((operation) => {
      screen.getByText(operation)
    })
  })

  it('should render an input type text', () => {
    render(<Calculator />)
    const input = screen.getByTestId('number')
    expect(input.type).toBe('text')
  })

  it('should take user input after clicking a number', () => {
    render(<Calculator />)
    const input = screen.getByTestId('number')
    const number = screen.getByText('1')
    // Esta es la forma de hacer click en un elemento
    fireEvent.click(number)
    expect(input.value).toBe('1')
  })

  it('should take user input after clicking several numbers', () => {
    render(<Calculator />)
    const input = screen.getByTestId('number')
    const number = screen.getByText('1')
    // Esta es la forma de hacer click en un elemento
    fireEvent.click(number)

    const number2 = screen.getByText('2')
    // Esta es la forma de hacer click en un elemento
    fireEvent.click(number2)

    const number3 = screen.getByText('3')
    // Esta es la forma de hacer click en un elemento
    fireEvent.click(number3)
    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)
    const input = screen.getByTestId('number')
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText('2')
    fireEvent.click(two)

    // const equal = screen.getByText('=')
    // fireEvent.click(equal)

    expect(input.value).toBe('1+2')
  })

  it('should calculate based on user input and show the result', () => {
    render(<Calculator />)
    const input = screen.getByTestId('number')
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    expect(input.value).toBe('3')
  })
})
