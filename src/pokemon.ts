import { Stats, Stat } from "./pokemon/stats"
import { MovePool } from "./pokemon/moves"

export class Pokemon {
  SPEED = "speed"
  ATTACK = "attack"
  DEFENSE = "defense"

  id: number
  name: string
  level: number

  hp: number
  maxHp: number

  moves: MovePool

  private stats: Stats

  constructor(id: number, name: string, level: number, speed: Stat,
              attack: Stat, defense: Stat, hp: number, maxHp: number,
              moves: MovePool) {
    this.id    = id
    this.name  = name
    this.level = level
    this.stats = new Stats()
    this.stats.define(this.SPEED, speed)
    this.stats.define(this.ATTACK, attack)
    this.stats.define(this.DEFENSE, defense)

    this.hp     = hp
    this.maxHp = maxHp

    this.moves = moves
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

  private speed: Stat = new Stat(1)
  private attack: Stat = new Stat(1)
  private defense: Stat = new Stat(1)

  private hp = 0
  private maxHp = 0

  private moves: MovePool

  constructor(id: number, name: string, moves: MovePool) {
    this.id    = id
    this.name  = name
    this.moves = moves
  }

  build(): Pokemon {
    return new Pokemon(
      this.id,
      this.name,
      this.level,
      this.speed,
      this.attack,
      this.defense,
      this.hp,
      this.maxHp,
      this.moves
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
    if(value === 0) { return this; } // Exception
    this.defense = new Stat(value)
    return this
  }

  setLevel(value: number): PokemonBuilder {
    this.level = value
    return this
  }

  setHp(value: number): PokemonBuilder {
    this.hp = value
    return this
  }

  setMaxHp(value: number): PokemonBuilder {
    this.maxHp = value
    return this
  }
}
