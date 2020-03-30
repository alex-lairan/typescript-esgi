import { Pokemon } from "../pokemon"
import { Move } from "../pokemon/moves"

export class AttackDamage {
  attacker: Pokemon
  defender: Pokemon

  constructor(attacker: Pokemon, defender: Pokemon) {
    this.attacker = attacker
    this.defender  = defender
  }

  call(move: Move) {
    return this.formula(
      this.attacker.level,
      move.power,
      this.attacker.attack().baseStat,
      this.defender.defense().baseStat
    )
  }

  private formula(level, basePower, offensive, defensive) {
    return Math.floor(Math.floor(this.levelFactor(level) * offensive * basePower / defensive) / 50) + 2
  }

  private levelFactor(level) {
    return Math.floor(2 * level / 5 + 2)
  }
}
