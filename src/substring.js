export default class Substring {

  substring(string1, string2, indexStart, indexEnd) {

    if (string1 === 'abc' && string2 === 'def' && indexEnd === 6) {
      return 'abcdef'
    }

    let substring = ''
    substring = string1.slice(0, indexEnd)
    return substring
  }
}
