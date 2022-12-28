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
  umiej_1: Ability;
  umiej_2: Ability;
  umiej_3: Ability;
  umiej_4: Ability;
  umiej_5: Ability;
  umiej_6: Ability;
  umiej_7: Ability;
  umiej_8: Ability;
  umiej_9: Ability;
  hobby_1: Ability;
  hobby_2: Ability;
  hobby_3: Ability;
  hobby_4: Ability;

  constructor() {
    this.umiej_1 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_2 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_3 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_4 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_5 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_6 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_7 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_8 = new Ability(
      this.profMake(this.professions).toString(),
      +this.value(this.profsValue)
    );

    this.umiej_9 = new Ability(this.wealhtMake(), +this.value(this.profsValue));

    this.hobby_1 = this.hobbyMake(this.professions);
    this.hobby_2 = this.hobbyMake(this.professions);
    this.hobby_3 = this.hobbyMake(this.professions);
    this.hobby_4 = this.hobbyMake(this.professions);
  }

  value(professions: number[]): number {
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
      name: `Antropologia`,
      value: 1,
    },
    {
      name: `Archeologia`,
      value: 1,
    },
    {
      name: `Bron Palna (Długa)`,
      value: 25,
    },
    {
      name: `Bron Palna (Krótka)`,
      value: 20,
    },
    {
      name: `Charakteryzacja`,
      value: 5,
    },
    {
      name: `Elektryka`,
      value: 10,
    },
    {
      name: `Gadanina`,
      value: 5,
    },
    {
      name: `Historia`,
      value: 5,
    },
    {
      name: `Jezyk Obcy`,
      value: 1,
    },
    {
      name: `Korzystanie z Bubliotek`,
      value: 20,
    },
    {
      name: `Majętność`,
      value: 0,
    },
    {
      name: `Mechanika`,
      value: 10,
    },
    {
      name: `Medycyna`,
      value: 1,
    },
    {
      name: `Nasłuchiwanie`,
      value: 20,
    },
    {
      name: `Nauka`,
      value: 1,
    },
    {
      name: `Nawigacja`,
      value: 10,
    },
    {
      name: `Obsługa cięzkiego sprzętu`,
      value: 1,
    },
    {
      name: `Okultyzm`,
      value: 5,
    },
    {
      name: `Perswazja`,
      value: 10,
    },
    {
      name: `Pierwsza Pomoc`,
      value: 30,
    },
    {
      name: `Prawo`,
      value: 5,
    },
    {
      name: `Pscchoanaliza`,
      value: 1,
    },
    {
      name: `Psychologia`,
      value: 10,
    },
    {
      name: `Spostrzegawczość`,
      value: 25,
    },
    {
      name: `Sztuka / Rzemiosło`,
      value: 5,
    },
    {
      name: `Sztuka Przetrwania`,
      value: 10,
    },
    {
      name: `Ślusarstwo`,
      value: 1,
    },
    {
      name: `Tropienie`,
      value: 10,
    },
    {
      name: `Ukrywanie`,
      value: 20,
    },
    {
      name: `Unik`,
      value: 30,
    },
    {
      name: `Urok Osobisty`,
      value: 15,
    },
    {
      name: `Walka Wręcz (Bijatyka)`,
      value: 25,
    },
    {
      name: `Wiedza o Naturze`,
      value: 10,
    },
    {
      name: `Zastraszanie`,
      value: 15,
    },
    {
      name: `Zręczne Palce`,
      value: 10,
    },
  ];
}
