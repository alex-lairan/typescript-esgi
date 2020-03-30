import { Pokemon } from "../pokemon";
import { Maybe, None, Some } from "../maybe";

interface OrderScenario {
  call(alpha: Pokemon, beta: Pokemon): Maybe<Pokemon>
}

class ScenarioBySpeed implements OrderScenario {
  call(alpha: Pokemon, beta: Pokemon): Maybe<Pokemon> {
    if(alpha.speed > beta.speed) {
      return new Some(alpha)
    } else if(beta.speed > alpha.speed) {
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

  call(seed: number = Math.random()): Pokemon {
    return this.scenario.reduce((acc:Maybe<Pokemon>, scenario) => {
      return acc.or(() => scenario.call(this.alpha, this.beta))
    }, new None<Pokemon>()).value_or(this.random_pokemon(seed))
  }

  private random_pokemon(seed: number): Pokemon {
    const indice = Math.floor(2 * seed)
    return [this.alpha, this.beta][indice]
  }
}
