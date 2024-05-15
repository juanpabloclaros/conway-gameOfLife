import { Coordinates } from "./Coordinates.js"

class Cell {
  constructor(readonly isAlive: boolean) {}

  nextGeneration(neighbors: Cell[]): Cell {
    const hasTwoAliveNeighbors = neighbors.filter((cell) => cell.isAlive).length === 2
    return new Cell(hasTwoAliveNeighbors && this.isAlive)
  }
}
export class Board {
  private readonly cells: Cell[][]
  constructor(cells: Array<Array<boolean>>) {
    this.cells = cells.map((row) => row.map((cell) => new Cell(cell)))
  }

  nextGeneration(): Board {
    const newCells = this.cells.map((row, i) =>
      row.map((cell, j) => this.getNextGeneration(Coordinates.at(i, j), cell)),
    )
    return new Board(newCells)
  }

  private getNextGeneration(coordinates: Coordinates, cell: Cell) {
    const neighbors = this.getNeighbors(coordinates)
    return cell.nextGeneration(neighbors).isAlive
  }

  getNeighbors(coordinates: Coordinates) {
    return coordinates.getNeighbors().map((coordinate) => this.getCellAt(coordinate))
  }

  private getCellAt(neighborsCoordinate: Coordinates) {
    return neighborsCoordinate.extractFrom(this.cells) ?? new Cell(false)
  }

  toString() {
    return this.cells
      .map((row) => row.map((cell) => (cell.isAlive ? "+" : " ")))
      .map((row) => row.join(""))
      .join("\n")
  }
}
