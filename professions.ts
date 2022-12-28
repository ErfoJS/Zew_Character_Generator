import { Stat } from "./stats";

class Ability {
  name: string;
  value: number;
  half: number;
  oneFifth: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
    this.half = Math.floor(value / 2);
    this.oneFifth = Math.floor(value / 5);
  }
}

type Hobby = {
  name: string;
  value: number;
};

export class Professnion {
  ability_1: Ability;
  ability_2: Ability;
  ability_3: Ability;
  ability_4: Ability;
  ability_5: Ability;
  ability_6: Ability;
  ability_7: Ability;
  ability_8: Ability;
  ability_9: Ability;
  hobby_1: Ability;
  hobby_2: Ability;
  hobby_3: Ability;
  hobby_4: Ability;

  constructor() {
    this.ability_1 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_2 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_3 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_4 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_5 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_6 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_7 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_8 = new Ability(
      this.profMake(this.professions).toString(),
      +this.valueGenerator(this.profsValue)
    );

    this.ability_9 = new Ability(
      this.wealhtMake(),
      +this.valueGenerator(this.profsValue)
    );

    this.hobby_1 = this.hobbyMake(this.professions);
    this.hobby_2 = this.hobbyMake(this.professions);
    this.hobby_3 = this.hobbyMake(this.professions);
    this.hobby_4 = this.hobbyMake(this.professions);
  }

  valueGenerator(professions: number[]): number {
    const index = Math.floor(Math.random() * professions.length);
    const [prof] = this.profsValue.splice(index, 1);
    return prof;
  }

  profMake(professions: Hobby[]): string {
    const index = Math.floor(Math.random() * professions.length);
    const [prof] = this.professions.splice(index, 1);
    return prof.name;
  }

  wealhtMake(): string {
    const index = this.professions.findIndex(
      (element) => element.name === "Majętność"
    );
    if (index) {
      const [prof] = this.professions.splice(index, 1);
      return prof.name;
    } else {
      return this.professions[
        Math.floor(Math.random() * this.professions.length)
      ].name;
    }
  }

  hobbyMake(professions: Hobby[]): Ability {
    const index = Math.floor(Math.random() * professions.length);
    const [randomHobby] = this.professions.splice(index, 1);
    randomHobby.value += 20;
    const hobby = new Ability(randomHobby.name, randomHobby.value);
    return hobby;
  }

  private profsValue = [70, 60, 60, 50, 50, 50, 40, 40, 40];

  private professions: Hobby[] = [
    {
      name: `anthropology`,
      value: 1,
    },
    {
      name: `archaeology`,
      value: 1,
    },
    {
      name: `firearm (long)`,
      value: 25,
    },
    {
      name: `firearm (short)`,
      value: 20,
    },
    {
      name: `Charakteryzacja`,
      value: 5,
    },
    {
      name: `electricity`,
      value: 10,
    },
    {
      name: `smalltalking`,
      value: 5,
    },
    {
      name: `history`,
      value: 5,
    },
    {
      name: `foreign language`,
      value: 1,
    },
    {
      name: `using libraries`,
      value: 20,
    },
    {
      name: `wealth`,
      value: 0,
    },
    {
      name: `mechanics`,
      value: 10,
    },
    {
      name: `medicine`,
      value: 1,
    },
    {
      name: `listening`,
      value: 20,
    },
    {
      name: `science`,
      value: 1,
    },
    {
      name: `navigation`,
      value: 10,
    },
    {
      name: `handling heavy equipment`,
      value: 1,
    },
    {
      name: `occultism`,
      value: 5,
    },
    {
      name: `persuasion`,
      value: 10,
    },
    {
      name: `first aid`,
      value: 30,
    },
    {
      name: `law`,
      value: 5,
    },
    {
      name: `pschoanalyze`,
      value: 1,
    },
    {
      name: `psychology`,
      value: 10,
    },
    {
      name: `observation`,
      value: 25,
    },
    {
      name: `art / craft`,
      value: 5,
    },
    {
      name: `the art of survival`,
      value: 10,
    },
    {
      name: `ironwork`,
      value: 1,
    },
    {
      name: `tracking`,
      value: 10,
    },
    {
      name: `hiding`,
      value: 20,
    },
    {
      name: `doge`,
      value: 0,
    },
    {
      name: `personal charm`,
      value: 15,
    },
    {
      name: `hand-to-hand combat (brawl)`,
      value: 25,
    },
    {
      name: `knowledge of nature`,
      value: 10,
    },
    {
      name: `bullying`,
      value: 15,
    },
    {
      name: `skillful fingers`,
      value: 10,
    },
  ];
}
