import { Cell } from "./Cell.js"

export class Neighbors {
  constructor(private readonly cells: Cell[]) {
    if (cells.length !== 8) {
      throw new Error("There must be 8 neighbors")
    }
  }

  aliveAmount() {
    return this.cells.filter((cell) => cell.isAlive()).length
  }
}
