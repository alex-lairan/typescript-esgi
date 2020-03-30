import { PokemonBuilder, Pokemon } from "../../src/pokemon"
import { Battle } from "../../src/battle"
import { Move, MovePool } from "../../src/pokemon/moves"
import { Some, None } from "../../src/maybe"

describe("Battle", () => {
  describe("#round", () => {
    it("alpha must win", () => {
      let moves = new MovePool(new Move("claw", 100, 0, 1, 100))
      let alpha: Pokemon = new PokemonBuilder(1, "a", moves).setSpeed(100).setAttack(100).setMaxHp(100).setHp(100).build()
      let beta: Pokemon  = new PokemonBuilder(1, "b", moves).setSpeed(1).setMaxHp(1).setHp(1).build()

      let battle = new Battle(alpha, beta)

      expect(battle.round()).toEqual(new Some(alpha))
    })

    it("beta must win aften being hited", () => {
      let moves = new MovePool(new Move("claw", 100, 0, 1, 100))
      let alpha: Pokemon = new PokemonBuilder(1, "a", moves).setSpeed(100).setAttack(1).setMaxHp(1).setHp(1).build()
      let beta: Pokemon  = new PokemonBuilder(1, "b", moves).setSpeed(1).setAttack(1).setMaxHp(100).setHp(100).build()

      let battle = new Battle(alpha, beta)

      expect(battle.round()).toEqual(new Some(beta))
    })

    it("must be a draw", () => {
      let moves = new MovePool(new Move("claw", 100, 0, 1, 100))
      let alpha: Pokemon = new PokemonBuilder(1, "a", moves).setSpeed(100).setAttack(1).setMaxHp(100).setHp(100).build()
      let beta: Pokemon  = new PokemonBuilder(1, "b", moves).setSpeed(1).setAttack(1).setMaxHp(100).setHp(100).build()

      let battle = new Battle(alpha, beta)

      expect(battle.round()).toEqual(new None<Pokemon>())
    })
  })
})
