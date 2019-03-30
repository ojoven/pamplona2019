import Calculator from "../src/calculator";

describe('Calculator', () => {
  it('is true', () => {
    expect(true).toBeTruthy()
  })

  it('multiplies', () => {
    let calculator = new Calculator;
    expect(calculator.multiply(5, 10)).toBe(50)
  })

  it('adds', () => {
    let calculator = new Calculator;
    expect(calculator.add(5, 10)).toBe(15)
    expect(calculator.add(10, 10)).toBe(20)
  })
})
