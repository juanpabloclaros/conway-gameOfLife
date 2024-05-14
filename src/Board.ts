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
    const newCells = this.cells.map((row, i) => row.map((cell, j) => cell && this.getNextGeneration(i, j)))
    return new Board(newCells)
  }

  getNextGeneration(i: number, j: number) {
    const neighbors = this.getNeighbors(i, j)

    const isAlive = neighbors.filter(Boolean).length === 2
    return isAlive
  }

  getNeighbors(row: number, column: number) {
    const neighbors = []

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (row === i && column === j) {
          continue
        }
        const rowOfCells = this.cells[i] ?? []
        const cell = rowOfCells[j] ?? false
        neighbors.push(cell)
      }
    }

    return neighbors
  }
}
