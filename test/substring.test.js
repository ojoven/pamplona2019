import Substring from "../src/substring";

describe('Substring', () => {
  it('is true', () => {
    expect(true).toBeTruthy()
  })

  it('2 empty strings return empty string', () => {
    let substring = new Substring;
    let result = substring.substring('', '', 0, 0);
    expect(result).toBe('')
  })

  it('indexes 0,1 return first character', () => {
    let substring = new Substring;
    let result = substring.substring('abc', 'def', 0, 1);
    expect(result).toBe('a')

    result = substring.substring('bcd', 'def', 0, 1);
    expect(result).toBe('b')
  })

  it('indexes 0,2 return first 2 characters', () => {
    let substring = new Substring;
    let result = substring.substring('abc', 'def', 0, 2);
    expect(result).toBe('ab')
  })

})
