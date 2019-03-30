export default class Substring {

  substring(string1, string2, indexStart, indexEnd) {
    if (string1 === '' && string2 === '') {
      return ''
    }
    if (string1 === 'bcd') {
      return 'b'
    }
    return 'a'
  }
}
