import { Coordinates } from "./Coordinates.js"

export class Board {
  private readonly cells: boolean[][]
  constructor(cells: Array<Array<boolean>>) {
    this.cells = cells
  }

  nextGeneration(): Board {
    const newCells = this.cells.map((row, i) =>
      row.map((cell, j) => this.getNextGeneration(Coordinates.at(i, j), cell)),
    )
    return new Board(newCells)
  }

  private getNextGeneration(coordinates: Coordinates, cell: boolean) {
    const neighbors = this.getNeighbors(coordinates)
    const hasTwoAliveNeighbors = neighbors.filter(Boolean).length === 2
    return hasTwoAliveNeighbors && cell
  }

  getNeighbors(coordinates: Coordinates) {
    return coordinates.getNeighbors().map((coordinate) => this.getCellAt(coordinate))
  }

  private getCellAt(neighborsCoordinate: Coordinates) {
    return neighborsCoordinate.extractFrom(this.cells) ?? false
  }

  toString() {
    return this.cells
      .map((row) => row.map((cell) => (cell ? "+" : " ")))
      .map((row) => row.join(""))
      .join("\n")
  }
}
