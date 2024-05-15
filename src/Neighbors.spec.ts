import { describe, it, expect } from "vitest"
import { Cell } from "./Cell.js"
import { Neighbors } from "./Neighbors.js"

describe("Neighbors", () => {
  it("cannot be created with 7 cells", () => {
    const cells = [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()]

    expect(() => new Neighbors(cells)).toThrow()
  })

  it("cannot be created with 9 cells", () => {
    const cells = [
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
    ]

    expect(() => new Neighbors(cells)).toThrow()
  })
})
