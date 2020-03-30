import { Stats, Stat } from "./pokemon/stats"

export class Pokemon {
  SPEED = "speed"
  ATTACK = "attack"
  DEFENSE = "defense"

  id: number
  name: string
  level: number

  private stats: Stats

  constructor(id: number, name: string, level: number, speed: Stat, attack: Stat, defense: Stat) {
    this.id    = id
    this.name  = name
    this.level = level
    this.stats = new Stats()
    this.stats.define(this.SPEED, speed)
    this.stats.define(this.ATTACK, attack)
    this.stats.define(this.DEFENSE, defense)
  }

  speed() {
    return this.stats.get(this.SPEED)
  }

  attack() {
    return this.stats.get(this.ATTACK)
  }

  defense() {
    return this.stats.get(this.DEFENSE)
  }
}

export class PokemonBuilder {
  private name: string
  private id: number
  private level = 1

  private speed: Stat = new Stat(0)
  private attack: Stat = new Stat(0)
  private defense: Stat = new Stat(0)

  constructor(id: number, name: string) {
    this.id   = id
    this.name = name
  }

  build(): Pokemon {
    return new Pokemon(
      this.id,
      this.name,
      this.level,
      this.speed,
      this.attack,
      this.defense,
    )
  }

  setSpeed(value: number): PokemonBuilder {
    this.speed = new Stat(value)
    return this
  }

  setAttack(value: number): PokemonBuilder {
    this.attack = new Stat(value)
    return this
  }

  setDefense(value: number): PokemonBuilder {
    this.defense = new Stat(value)
    return this
  }

  setLevel(value: number): PokemonBuilder {
    this.level = value
    return this
  }
}
