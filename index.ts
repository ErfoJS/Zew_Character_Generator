import { Professnion } from "./professions";
import { Stats } from "./stats";

class Character {
  name: string;
  stats: Stats;
  profession: any;

  constructor() {
    this.name = Character.drawS(names);
    this.stats = new Stats();
    this.profession = new Professnion();
  }

  static drawS(trait: string[]): string {
    return trait[Math.floor(Math.random() * trait.length)];
  }
}

// function doge: number(character: Character) {

// }
const names = ["John Snow", "Alisa Rivenbort", "Julius Cezar"];

let RandomCharacter = new Character();
RandomCharacter;
console.log(RandomCharacter);
