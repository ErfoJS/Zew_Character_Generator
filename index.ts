import { Professnion } from "./professions";
import { Stats } from "./stats";

class Character {
  name: string;
  stats: object;
  profession: any;

  constructor() {
    this.name = Character.drawS(names);
    this.stats = new Stats();
    this.profession = new Professnion();
  }

  static drawS(trait: string[]): string {
    return trait[Math.floor(Math.random() * trait.length)];
  }

  static drawO(trait: Professnion[]): object {
    return trait[Math.floor(Math.random() * trait.length)];
  }
}

const names = ["John Snow", "Alisa Rivenbort", "Julius Cezar"];

let lol = new Character();
let lol2 = new Character();
console.log(lol);
console.log(lol2);
