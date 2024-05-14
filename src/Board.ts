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
    const newCells = this.cells.map((row, i) => row.map((cell, j) => this.getNextGeneration(i, j, cell)))
    return new Board(newCells)
  }

  getNextGeneration(i: number, j: number, cell: boolean) {
    const neighbors = this.getNeighbors(i, j)

    const aliveNeighbors = neighbors.filter(Boolean).length === 2
    return aliveNeighbors && cell
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
