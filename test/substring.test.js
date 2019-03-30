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

  

})
