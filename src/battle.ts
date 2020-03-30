import { Pokemon } from "./pokemon"

export class Battle {
  alpha: Pokemon
  beta: Pokemon

  constructor(alpha: Pokemon, beta: Pokemon) {
    this.alpha = alpha
    this.beta  = beta
  }

  round() {

  }
}