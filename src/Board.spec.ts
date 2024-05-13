import { describe, it, expect, vi } from "vitest"
import { Board } from "./Board.js"

describe("Board", () => {
  it("print dead cells", () => {
    const board = new Board([
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ])

    const result = board.toString()

    expect(result).toEqual(`   
   
   `)
  })

  it("print alive cells", () => {
    const board = new Board([
        [true, true, true],
        [true, true, true],
        [true, true, true]
    ])

    const result = board.toString()

    expect(result).toEqual(`+++
+++
+++`)
  })
})