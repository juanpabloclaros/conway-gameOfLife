import { describe, expect, it } from "vitest"
import { Board } from "./Board.js"
import { Coordinates } from "./Coordinates.js"

describe("Board", () => {
  it("print dead cells", () => {
    const board = Board.from([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])

    const result = board.toString()

    expect(result).toEqual("   \n   \n   ")
  })

  it("print alive cells", () => {
    const board = Board.from([
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ])

    const result = board.toString()

    expect(result).toEqual(`+++
+++
+++`)
  })

  it("keeps dead cells when all dead", () => {
    const board = Board.from([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])

    const nextBoard = board.nextGeneration()

    expect(nextBoard).toEqual(board)
  })

  it("kills a cell if there are no neighbors", () => {
    const board = Board.from([
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ])

    const expectedBoard = Board.from([
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ])

    const nextBoard = board.nextGeneration()

    expect(nextBoard).toEqual(expectedBoard)
  })

  it("cells remain alive if there are two neighbors", () => {
    const board = Board.from([
      [true, false, false],
      [true, true, false],
      [false, false, false],
    ])

    const nextBoard = board.nextGeneration()

    expect(nextBoard).toEqual(board)
  })

  it("gets the neighbors", () => {
    const board = Board.from([
      [true, false, false],
      [true, true, false],
      [false, false, false],
    ])

    const neighbors = board.getNeighbors(Coordinates.at(1, 1))

    const alivesNeighbors = neighbors.filter((cell) => cell.isAlive)

    expect(alivesNeighbors).toHaveLength(2)
  })

  it("has 8 neighbors", () => {
    const board = Board.from([
      [true, false, false],
      [true, true, false],
      [false, false, false],
    ])

    const neighbors = board.getNeighbors(Coordinates.at(1, 1))

    expect(neighbors).toHaveLength(8)
  })

  it("retrives corner neighbors", () => {
    const board = Board.from([
      [true, false, false],
      [true, true, false],
      [false, false, false],
    ])

    const neighbors = board.getNeighbors(Coordinates.at(2, 2))

    const alivesNeighbors = neighbors.filter((cell) => cell.isAlive)

    expect(alivesNeighbors).toHaveLength(1)
  })
})
