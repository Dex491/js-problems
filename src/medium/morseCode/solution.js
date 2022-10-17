const morseCode = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..'
}

function stringToMorse(string) {
  return string

    .toUpperCase()
    .split('')
    .map((toMorse) => {
      return morseCode[toMorse] ? morseCode[toMorse] : toMorse
    })
    .join('')
}
// const morseCode = {
//   A: '.-',
//   B: '-...',
//   C: '-.-.',
//   D: '-..',
//   E: '.',
//   F: '..-.',
//   G: '--.',
//   H: '....',
//   I: '..',
//   J: '.---',
//   K: '-.-',
//   L: '.-..',
//   M: '--',
//   N: '-.',
//   O: '---',
//   P: '.--.',
//   Q: '--.-',
//   R: '.-.',
//   S: '...',
//   T: '-',
//   U: '..-',
//   W: '.--',
//   X: '-..-',
//   Y: '-.--',
//   Z: '--..'
// }
// const convertToMorse = (str) => {
//   return str
//     .toUpperCase()
//     .split('')
//     .map((el) => {
//       return morseCode[el] ? morseCode[el] : el
//     })
//     .join('')
// }
