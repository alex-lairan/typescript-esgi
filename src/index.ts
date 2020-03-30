import { PokemonBuilder, Pokemon } from "./pokemon"
import { Move, MovePool } from "./pokemon/moves"

let moves = new MovePool(new Move("claw", 50, 0, 50, 100))
let pokemon = new PokemonBuilder(1, "pika", moves).setSpeed(55)

console.log(pokemon)
