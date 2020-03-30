import { Some, None } from "../../src/maybe"

describe("Some", () => {
  describe("#or", () => {
    it("returns the current value", () => {
      const some = new Some(5)
      expect(some.or(() => new Some(10))).toEqual(new Some(5))
    })
  })

  describe("#value_or", () => {
    it("returns the current value", () => {
      const some = new Some(5)
      expect(some.value_or(10)).toEqual(5)
    })
  })
})

describe("None", () => {
  describe("#or", () => {
    it("returns the new value", () => {
      const none = new None<number>()
      expect(none.or(() => new Some(10))).toEqual(new Some(10))
    })
  })

  describe("#value_or", () => {
    it("returns the new value", () => {
      const none = new None<number>()
      expect(none.value_or(10)).toEqual(10)
    })
  })
})
