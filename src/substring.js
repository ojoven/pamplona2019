export default class Substring {

  substring(string1, string2, indexStart, indexEnd) {
    if (string1 === '' && string2 === '') {
      return ''
    }
    let substring = ''
    for (let i = 0; i < indexEnd; i++) {
      substring += string1[i];
    }
    return substring
  }
}
