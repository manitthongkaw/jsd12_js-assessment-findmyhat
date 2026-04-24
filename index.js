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

    console.log("Height (Y):", this.field.length);
    console.log("FWidth (X):", this.field[0].length);

    while (true) {

      // Check move on field
      let move = prompt("Go go go [w = up] [a = down] [s = left] [d = right] : ");
      if (move === "w") {this.areaY -= 1};
      if (move === "s") {this.areaY += 1};
      if (move === "a") {this.areaX -= 1};
      if (move === "d") {this.areaX += 1};

      // check move out field
      if (
        this.areaY < 0 || this.areaY >= this.field.length ||
        this.areaX < 0 || this.areaX >= this.field[0].length
      ) {
        console.log('✘ ออกนอกแผนที่!');
        break;
      }

      // check move to hole

      // check move to hat

    }
  }

}

const myField = new Field([
  [player, ground, ground],
  [ground, hole, ground],
  [ground, ground, hat],
  [ground, ground, hole]
]);

myField.checkField();