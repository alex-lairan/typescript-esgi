import { Stats, Stat } from "./pokemon/stats"

export class Pokemon {
  id: number
  name: string

  private stats: Stats

  constructor(id: number, name: string, speed: Stat) {
    this.name  = name
    this.id    = id
    this.stats = new Stats()
    this.stats.define("speed", speed)
  }

  speed() {
    this.stats.get("speed")
  }
}

export class PokemonBuilder {
  private name: string
  private id: number

  private speed: Stat = new Stat(0)

  constructor(id: number, name: string) {
    this.id   = id
    this.name = name
  }

  build(): Pokemon {
    return new Pokemon(
      this.id,
      this.name,
      this.speed
    )
  }

  setSpeed(value: number): PokemonBuilder {
    this.speed = new Stat(value)
    return this
  }
}
