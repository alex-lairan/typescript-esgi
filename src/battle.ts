import { Pokemon } from "./pokemon"
import { AttackOrder } from "./battle/attack_order"
import { AttackDamage } from "./battle/attack_damage"
import { Maybe, Some, None } from "./maybe"

export class Battle {
  alpha: Pokemon
  beta: Pokemon

  constructor(alpha: Pokemon, beta: Pokemon) {
    this.alpha = alpha
    this.beta  = beta
  }

  // TODO: Implement async
  call(): Pokemon {
    let winner = new None<Pokemon>()

    while(!winner.isSuccess()) {
      winner = this.round()
    }

    return (winner as Some<Pokemon>).value
  }

  // Return the winner or nothing
  round(): Maybe<Pokemon> {
    let attackOrder = new AttackOrder(this.alpha, this.beta)

    let first = attackOrder.call()

    if(this.alpha === first) {
      let damages = new AttackDamage(this.alpha, this.beta).call(this.alpha.moves.get(0))
      this.beta.hp -= damages
      if(this.isFinished()) { return new Some(this.alpha) }

      damages = new AttackDamage(this.beta, this.alpha).call(this.alpha.moves.get(0))
      this.alpha.hp -= damages
      if(this.isFinished()) { return new Some(this.beta) }
    } else {
      let damages = new AttackDamage(this.beta, this.alpha).call(this.alpha.moves.get(0))
      this.alpha.hp -= damages
      if(this.isFinished()) { return new Some(this.beta) }

      damages = new AttackDamage(this.alpha, this.beta).call(this.alpha.moves.get(0))
      this.beta.hp -= damages
      if(this.isFinished()) { return new Some(this.alpha) }
    }

    return new None<Pokemon>()
  }

  private isFinished() {
    return this.alpha.hp <= 0 || this.beta.hp <= 0
  }
}
