class Stat {
  readonly value: number;
  readonly half: number;
  readonly oneFifth: number;

  constructor(value: number) {
    this.value = value;
    this.half = value / 2;
    this.oneFifth = value / 5;
  }
}
export class Stats {
  private stats_value = [40, 50, 50, 50, 60, 60, 70, 80]; // 8 elements
  sila: Stat;
  kondycja: Stat;
  moc: Stat;
  zrecznosc: Stat;
  wyglad: Stat;
  budowaCiala: Stat;
  inteligencja: Stat;
  wyksztalcenie: Stat;
  szczescie: number;
  punktyMagii: number;
  krzepa: number;
  modyfikatorObrazen: number;
  punktyWytrzymalosci: number;
  poczytalnosc: number;
  unikNaturalny: number;
  jezykOjczysty: number;

  constructor() {
    this.sila = new Stat(this.bulid(this.stats_value));
    this.kondycja = new Stat(this.bulid(this.stats_value));
    this.moc = new Stat(this.bulid(this.stats_value));
    this.zrecznosc = new Stat(this.bulid(this.stats_value));
    this.wyglad = new Stat(this.bulid(this.stats_value));
    this.budowaCiala = new Stat(this.bulid(this.stats_value));
    this.inteligencja = new Stat(this.bulid(this.stats_value));
    this.wyksztalcenie = new Stat(this.bulid(this.stats_value));
    this.szczescie = this.luck();
    this.punktyMagii = this.magicPoints(this.moc.value);
    this.krzepa = this.sila.value + this.budowaCiala.value;
    this.modyfikatorObrazen = this.damageModifier(this.krzepa);
    this.punktyWytrzymalosci = Math.floor(
      (this.budowaCiala.value + this.kondycja.value) / 10
    );
    this.poczytalnosc = this.moc.value;
    this.unikNaturalny = this.zrecznosc.half;
    this.jezykOjczysty = this.wyksztalcenie.value;
  }

  bulid(statsValue: number[]): number {
    const index = Math.floor(Math.random() * statsValue.length);
    const [stat] = this.stats_value.splice(index, 1);
    return stat;
  }

  half(stat: number): number {
    return Math.floor(stat / 2);
  }

  oneFifth(stat: number): number {
    return Math.floor(stat / 5);
  }

  luck(): number {
    return (
      (Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1)) *
      5
    );
  }

  damageModifier(sturdiness: number): number {
    if (sturdiness <= 64) {
      return -2;
    } else if (sturdiness <= 84) {
      return -1;
    } else if (sturdiness <= 124) {
      return 0;
    } else if (sturdiness <= 164) {
      return 1;
    } else {
      return 2;
    }
  }

  magicPoints(power: number): number {
    return Math.floor(power / 5);
  }
}
