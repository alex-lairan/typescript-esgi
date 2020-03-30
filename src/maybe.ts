export abstract class Maybe<T> {
  abstract or<T1>(f: () => Maybe<T1>): Maybe<T|T1>
  abstract valueOr(lhs: T): T
  abstract tee(f: (val: T) => void)

  abstract isSuccess(): Boolean
}

export class Some<T> extends Maybe<T> {
  value: T

  constructor(value: T) {
    super()
    this.value = value
  }

  or<T1>(f: () => Maybe<T1>): Maybe<T|T1> {
    return this
  }

  valueOr(lhs: T): T {
    return this.value
  }

  tee(f: (val: T) => void) {
    f(this.value)
  }

  isSuccess(): Boolean {
    return true
  }
}

export class None<T> extends Maybe<T> {
  or<T1>(f: () => Maybe<T1>): Maybe<T|T1> {
    return f()
  }

  valueOr(lhs: T): T {
    return lhs
  }

  tee(f: (val: T) => void) {
  }

  isSuccess(): Boolean {
    return false
  }
}
