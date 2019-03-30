export default class Substring {

  substring(string1, string2, indexStart, indexEnd) {

    let substring = ''
    substring = string1.slice(0, indexEnd)
    return substring
  }
}
