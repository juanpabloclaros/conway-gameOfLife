import { Coordinates } from "./Coordinates.js"

class Cell {
  public static create(alive: boolean): Cell {
    return new Cell(alive)
  }

  private constructor(readonly isAlive: boolean) {}

  nextGeneration(neighbors: Cell[]): Cell {
    const hasTwoAliveNeighbors = neighbors.filter((cell) => cell.isAlive).length === 2
    return new Cell(hasTwoAliveNeighbors && this.isAlive)
  }
}

export class Board {
  private readonly cells: Cell[][]

  static from(cells: Array<Array<boolean>>) {
    return new Board(cells.map((row) => row.map((cell) => Cell.create(cell))))
  }

  private constructor(cells: Array<Array<Cell>>) {
    this.cells = cells
  }

  nextGeneration(): Board {
    const newCells = this.cells.map((row, i) =>
      row.map((cell, j) => this.getNextGeneration(Coordinates.at(i, j), cell)),
    )
    return new Board(newCells)
  }

  private getNextGeneration(coordinates: Coordinates, cell: Cell) {
    const neighbors = this.getNeighbors(coordinates)
    return cell.nextGeneration(neighbors)
  }

  getNeighbors(coordinates: Coordinates) {
    return coordinates.getNeighbors().map((coordinate) => this.getCellAt(coordinate))
  }

  private getCellAt(neighborsCoordinate: Coordinates) {
    return neighborsCoordinate.extractFrom(this.cells) ?? Cell.create(false)
  }

  toString() {
    return this.cells
      .map((row) => row.map((cell) => (cell.isAlive ? "+" : " ")))
      .map((row) => row.join(""))
      .join("\n")
  }
}
