export class Stat {
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
  strength: Stat;
  endurance: Stat;
  power: Stat;
  dexterity: Stat;
  appearance: Stat;
  bodyBulid: Stat;
  intelligence: Stat;
  education: Stat;
  luck: number;
  magicPoints: number;
  brawn: number;
  damageModifier: number;
  healthPoints: number;
  sanity: number;
  dogeNatural: number;
  motherLanguage: number;

  constructor() {
    this.strength = new Stat(this.drawStatsValue(this.stats_value));
    this.endurance = new Stat(this.drawStatsValue(this.stats_value));
    this.power = new Stat(this.drawStatsValue(this.stats_value));
    this.dexterity = new Stat(this.drawStatsValue(this.stats_value));
    this.appearance = new Stat(this.drawStatsValue(this.stats_value));
    this.bodyBulid = new Stat(this.drawStatsValue(this.stats_value));
    this.intelligence = new Stat(this.drawStatsValue(this.stats_value));
    this.education = new Stat(this.drawStatsValue(this.stats_value));
    this.luck = this.luckCount();
    this.magicPoints = this.magicPointsCounter(this.power.value);
    this.brawn = this.strength.value + this.bodyBulid.value;
    this.damageModifier = this.damageModifierCounter(this.brawn);
    this.healthPoints = Math.floor(
      (this.bodyBulid.value + this.endurance.value) / 10
    );
    this.sanity = this.power.value;
    this.dogeNatural = this.dexterity.half;
    this.motherLanguage = this.education.value;
  }

  drawStatsValue(statsValue: number[]): number {
    const index = Math.floor(Math.random() * statsValue.length);
    const [stat] = this.stats_value.splice(index, 1);
    return stat;
  }

  luckCount(): number {
    return (
      (Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1) +
        Math.floor(Math.random() * 6 + 1)) *
      5
    );
  }

  damageModifierCounter(sturdiness: number): number {
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

  magicPointsCounter(power: number): number {
    return Math.floor(power / 5);
  }
}
