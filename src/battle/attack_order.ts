import { Pokemon } from "../pokemon"
import { Maybe, None, Some } from "../maybe"

interface OrderScenario {
  call(alpha: Pokemon, beta: Pokemon): Maybe<Pokemon>
}

class ScenarioBySpeed implements OrderScenario {
  call(alpha: Pokemon, beta: Pokemon): Maybe<Pokemon> {
    if(alpha.speed().baseStat > beta.speed().baseStat) {
      return new Some(alpha)
    } else if(beta.speed().baseStat > alpha.speed().baseStat) {
      return new Some(beta)
    } else {
      return new None<Pokemon>()
    }
  }
}

export class AttackOrder {
  alpha: Pokemon
  beta: Pokemon

  private scenario = [
    new ScenarioBySpeed()
  ]

  constructor(alpha: Pokemon, beta: Pokemon) {
    this.alpha = alpha
    this.beta  = beta
  }

  call(seed = Math.random): Pokemon {
    return this.scenario.reduce((acc:Maybe<Pokemon>, scenario) => {
      return acc.or(() => scenario.call(this.alpha, this.beta))
    }, new None<Pokemon>()).valueOr(this.random_pokemon(seed))
  }

  private random_pokemon(seed): Pokemon {
    const indice = Math.floor(2 * seed())
    return [this.alpha, this.beta][indice]
  }
}
