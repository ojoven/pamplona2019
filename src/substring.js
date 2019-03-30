export default class Substring {

  substring(string1, string2, indexStart, indexEnd) {

    let substring = ''
    for (let i = 0; i < indexEnd; i++) {
      substring += string1[i];
    }
    return substring
  }
}
