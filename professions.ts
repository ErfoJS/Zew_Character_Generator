type ProfDefault = [
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  },
  {
    name: string;
    value: number;
  }
];

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
  hobby_1: Hobby;
  hobby_2: Hobby;
  hobby_3: Hobby;
  hobby_4: Hobby;

  constructor() {
    this.umiej_1 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_2 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_3 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_4 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_5 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_6 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_7 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_8 = new Ability(
      this.bulidProf(this.professions).toString(),
      +this.bulidProf(this.profsValue)
    );

    this.umiej_9 = new Ability(this.wealht(), +this.bulidProf(this.profsValue));

    this.hobby_1 = this.hobby(this.professions);
    this.hobby_2 = this.hobby(this.professions);
    this.hobby_3 = this.hobby(this.professions);
    this.hobby_4 = this.hobby(this.professions);
  }

  bulidProf(professions: ProfDefault | number[]): number | string {
    const index = Math.floor(Math.random() * professions.length);
    if (typeof professions[0] === "number") {
      const [prof] = this.profsValue.splice(index, 1);
      return prof;
    } else {
      const [prof] = this.professions.splice(index, 1);
      return prof.name;
    }
  }

  wealht(): string {
    const element = this.professions.find(
      (element) => element.name === "Majętność"
    );
    return element
      ? element.name
      : this.professions[Math.floor(Math.random() * this.professions.length)]
          .name;
  }

  hobby(professions: ProfDefault): Hobby {
    const index = Math.floor(Math.random() * professions.length);
    let [prof] = this.professions.splice(index, 1);
    prof.value += 20;
    return prof;
  }

  private profsValue = [70, 60, 60, 50, 50, 50, 40, 40, 40];

  private professions: ProfDefault = [
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