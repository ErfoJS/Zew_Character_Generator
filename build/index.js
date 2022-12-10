"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professions_1 = require("./professions");
class Character {
    // stats: object[];
    // bornPlace: string;
    // livingPlace: string;
    constructor() {
        this.name = Character.drawS(names);
        this.profession = Character.drawO(professions_1.professions);
    }
    static drawS(trait) {
        return trait[Math.floor(Math.random() * trait.length)];
    }
    static drawO(trait) {
        return trait[Math.floor(Math.random() * trait.length)].name;
    }
}
const names = ["John Snow", "Alisa Rivenbort", "Julius Cezar"];
let lol = new Character();
console.log(lol);
