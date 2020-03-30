export class Stat {
  baseStat: number

  constructor(baseStat: number) {
    this.baseStat = baseStat
  }
}

export class Stats {
  stats: Map<string, Stat>

  constructor() {
    this.stats = new Map<string, Stat>()
  }

  define(name: string, stat: Stat): void {
    this.stats.set(name, stat)
  }

  get(name: string): Stat {
    let stat = this.stats.get(name)
    if(stat === undefined) { stat = new Stat(0) }

    return stat
  }
}
