import { join } from "path"

export class Board {
  private readonly cells: boolean[][]
  constructor(cells: Array<Array<boolean>>) {
    this.cells = cells
  }
  toString() {
    return this.cells
      .map((row) => row.map((cell) => (cell ? "+" : " ")))
      .map((row) => row.join(""))
      .join("\n")
  }
  nextGeneration(): Board {
    const newCells = this.cells.map((row) => row.map((cell) => false))
    return new Board(newCells)
  }
}
