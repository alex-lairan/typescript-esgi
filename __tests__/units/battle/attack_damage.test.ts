import { AttackDamage } from "../../../src/battle/attack_damage"
import { PokemonBuilder, Pokemon } from "../../../src/pokemon"
import { Move, MovePool } from "../../../src/pokemon/moves"

describe("AttackDamage", () => {
  it("do damages to defender", () => {
    let move = new Move("claw", 100, 0, 1, 100)
    let moves = new MovePool(move)
    let attacker: Pokemon = new PokemonBuilder(1, "a", moves).setAttack(50).build()
    let defender: Pokemon  = new PokemonBuilder(1, "b", moves).setDefense(50).build()

    const attackDamage = new AttackDamage(attacker, defender)

    expect(attackDamage.call(move)).toEqual(6)
  })
})
