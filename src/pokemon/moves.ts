import { Maybe } from "../maybe"

export class Move {
  pp: number
  name: string
  power: number
  priority: number
  accuracy: number

  constructor(name: string, power: number, priority: number, pp: number, accuracy: number) {
    this.name = name
    this.power = power
    this.priority = priority
    this.pp = pp
    this.accuracy = accuracy
  }
}

export class MovePool {
  moves: Array<Move>

  constructor(attack1: Move, attack2: Maybe<Move>, attack3: Maybe<Move>, attack4: Maybe<Move>) {
    this.moves = new Array<Move>()
    this.moves.push(attack1)

    attack2.tee((move) => this.moves.push(move))
    attack3.tee((move) => this.moves.push(move))
    attack4.tee((move) => this.moves.push(move))
  }

  get(indice) {
    return this.moves[indice]
  }
}
