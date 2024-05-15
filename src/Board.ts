export class Coordinates {
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
    const neighbors = this.getNeighbors(Coordinates.at(i, j))

    const aliveNeighbors = neighbors.filter(Boolean).length === 2
    return aliveNeighbors && cell
  }

  getNeighbors(coordinates: Coordinates) {
    const neighbors = []
    const neighborsCoordinates: Coordinates[] = []

    for (let i = coordinates.getI() - 1; i <= coordinates.getI() + 1; i++) {
      for (let j = coordinates.getJ() - 1; j <= coordinates.getJ() + 1; j++) {
        if (coordinates.getI() === i && coordinates.getJ() === j) {
          continue
        }
        neighborsCoordinates.push(Coordinates.at(i, j))
      }
    }

    for (const neighborsCoordinate of neighborsCoordinates) {
      const rowOfCells = this.cells[neighborsCoordinate.getI()] ?? []
      const cell = rowOfCells[neighborsCoordinate.getJ()] ?? false
      neighbors.push(cell)
    }

    return neighbors
  }
}
