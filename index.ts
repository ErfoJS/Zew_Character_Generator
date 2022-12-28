import { Professnion } from "./professions";
import { Stats } from "./stats";

class Character {
  name: string;
  stats: Stats;
  profession: any;

  constructor() {
    this.name = Character.drawName(characterNames);
    this.stats = new Stats();
    this.profession = new Professnion();
  }

  static drawName(trait: string[]): string {
    return trait[Math.floor(Math.random() * trait.length)];
  }
}

const characterNames = ["John Snow", "Alisa Rivenbort", "Julius Cezar"];

let RandomCharacter = new Character();
RandomCharacter;
console.log(RandomCharacter);
