import { AttackOrder } from "../../../src/battle/attack_order"
import { PokemonBuilder, Pokemon } from "../../../src/pokemon"

describe("AttackOrder", () => {
  describe("with speed", () => {
    it("select the pokemon with more speed", () => {
      let alpha: Pokemon = new PokemonBuilder(1, "a").setSpeed(5).build()
      let beta: Pokemon  = new PokemonBuilder(1, "b").setSpeed(10).build()

      const attackOrder = new AttackOrder(alpha, beta)

      expect(attackOrder.call()).toEqual(beta)
    })
  })

  describe("with draw", () => {
    it("select first with seed < 0.5", () => {
      const seed = 0.2

      const alpha: Pokemon = new PokemonBuilder(1, "a").setSpeed(5).build()
      const beta: Pokemon  = new PokemonBuilder(1, "b").setSpeed(5).build()

      const attackOrder = new AttackOrder(alpha, beta)

      expect(attackOrder.call(seed)).toEqual(alpha)
    })

    it("select last with seed > 0.5", () => {
      const seed = 0.7

      const alpha: Pokemon = new PokemonBuilder(1, "a").setSpeed(5).build()
      const beta: Pokemon  = new PokemonBuilder(1, "b").setSpeed(5).build()

      const attackOrder = new AttackOrder(alpha, beta)

      expect(attackOrder.call(seed)).toEqual(beta)
    })
  })
})
