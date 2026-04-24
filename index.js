const prompt = require('prompt-sync')({sigint:true});

const hat = '⚾';
const hole = '☢';
const ground = '✻';
const player = '☝';

class Field {

  constructor(field) {
    this.field = field;
    this.areaY = 0;
    this.areaX = 0;
  }

  print() {
    console.log(this.field.map(row => row.join('  ')).join('\n'));
  }

  play() {

    while (true) {

      // Check move on field
      let move = prompt("Go go go [w = up] [s = down] [a = left] [d = right] : ");
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

      const point = this.field[this.areaY][this.areaX];
      // check move to hole
      if (point === hole) {
        console.log('☢ ตกหลุม!');
        break;
      }
      // check move to hat
      if (point === hat) {
        console.log('⚾ เจอลูกบอลแล้ว!');
        break;
      }

    }
  }

}

const myField = new Field([
  [player, ground, ground],
  [ground, hole, ground],
  [ground, ground, hat],
  [ground, ground, hole]
]);

myField.play();