import { PokemonBuilder, Pokemon } from "./pokemon"
import { Move, MovePool } from "./pokemon/moves"
import { Some } from "./maybe"
import { Battle } from "./battle"

let pikachuAttacks = new MovePool(
  new Move("Nuzzle", 20, 0, 20, 100),
  new Some(new Move("Thunder Shock", 40, 0, 30, 100))
)
let pikachu = new PokemonBuilder(25, "Pikachu", pikachuAttacks)
                .setAttack(55)
                .setDefense(30)
                .setHp(35)
                .setMaxHp(35)
                .setSpeed(90)
                .setLevel(5)
                .build()
console.log(pikachu)

let eeveeAttacks = new MovePool(
  new Move("Tackle", 40, 0, 35, 100),
)
let eevee = new PokemonBuilder(133, "Eevee", eeveeAttacks)
                .setAttack(55)
                .setDefense(50)
                .setHp(35)
                .setMaxHp(35)
                .setSpeed(55)
                .setLevel(5)
                .build()
console.log(eevee)


let battle = new Battle(pikachu, eevee)

let result = battle.call()
console.log("The pokémon " + result.name + " won.")
