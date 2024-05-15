class Coordinates {
  constructor(
    private readonly i: number,
    private readonly j: number,
  ) {}

  static at(i: number, j: number) {
    return new Coordinates(i, j)
  }

  getI() {
    return this.i
  }
  getJ() {
    return this.j
  }
}

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
    const coordinates = Coordinates.at(row, column)
    const neighbors = []

    for (let i = coordinates.getI() - 1; i <= coordinates.getI() + 1; i++) {
      for (let j = coordinates.getJ() - 1; j <= coordinates.getJ() + 1; j++) {
        if (coordinates.getI() === i && coordinates.getJ() === j) {
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
