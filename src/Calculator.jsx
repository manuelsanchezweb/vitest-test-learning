import { evaluate } from 'mathjs'
import { useState } from 'react'

export const operations = ['/', '*', '-', '+']
export const equalSign = '='
export const numbers = [...Array(10).keys()]

export const rows = [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['0']]

export const Calculator = () => {
  const [value, setValue] = useState('')

  const createHandleClick = (op) => {
    setValue((prevValue) => prevValue.concat(op))
  }

  return (
    <section>
      <h1>Calculator</h1>
      <input
        value={value}
        readOnly
        data-testid="number"
        type="text"
        name="number"
        id="number"
      />
      <div role="grid">
        {rows.map((row, index) => (
          <div key={index} data-testid="row" role="row">
            {row.map((number) => (
              <button
                onClick={() => createHandleClick(number)}
                key={number}
                role="gridcell"
              >
                {number}
              </button>
            ))}
          </div>
        ))}
        {operations.map((operation) => (
          <button
            onClick={() => createHandleClick(operation)}
            key={operation}
            role="gridcell"
          >
            {operation}
          </button>
        ))}
        <button onClick={() => setValue(evaluate(value).toString())}>
          {equalSign}
        </button>
      </div>
    </section>
  )
}
