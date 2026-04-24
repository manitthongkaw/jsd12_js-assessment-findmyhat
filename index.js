const prompt = require('prompt-sync')({sigint: true});

const hat = '🏐';
const hole = '🚩';
const ground = '🟩';
const player = '🏌️‍♂️';

class Field {

  constructor(field) {
    this.field = field;
    this.areaY = 0;
    this.areaX = 0;
  }

  checkField() {
    let move = prompt("Go go go [w = up] [a = down] [s = left] [d = right] : ");
    while (true) {
      if (move === "w") {this.areaY -= 1};
      if (move === "s") {this.areaY += 1};
      if (move === "a") {this.areaX -= 1};
      if (move === "d") {this.areaX += 1};
    }
  }
}

const myField = new Field([
  [player, ground, ground],
  [ground, hole, ground],
  [ground, ground, hat]
]);

console.log(Field.checkField);