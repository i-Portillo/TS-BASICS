abstract class StreetFighter {
  constructor() {}

  move() {}

  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

// const ryu = new StreetFighter();  // Error, cannot create an instance of an abstract class

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }
  get name(): string {
    return "Ryu"
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightning Kick";
  }
  get name(): string {
    return "Chun-Li"
  }
}

const ryu = new Ryu();

console.log(ryu.getSpecialAttack());
ryu.fight();

const chunLi = new ChunLi();
chunLi.fight();