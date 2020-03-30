export class Stat {
  base_stat: number

  constructor(base_stat: number) {
    this.base_stat = base_stat
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
