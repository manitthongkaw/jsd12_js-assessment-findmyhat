const prompt = require('prompt-sync')({sigint: true});

const hat = '🏐';
const hole = '🚩';
const fieldCharacter = '🟩';
const pathCharacter = '🏌️‍♂️';

class Field {
  constructor(field) {
    this.field = field;
    this.areaX = 0;
    this.areaY = 0;
  }
}

const map = new Field([
  [pathCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, fieldCharacter, hat]
]);