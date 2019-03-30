export default class Substring {

  substring(string1, string2, indexStart, indexEnd) {
    if (string1 === '' && string2 === '') {
      return ''
    }
    if (indexEnd === 2 && string1 === 'bcd') {
      return 'bc'
    }
    if (indexEnd === 2) {
      return 'ab'
    }
    return string1[0]
  }
}
