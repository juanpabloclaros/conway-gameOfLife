export class Cell {
  public static dead() {
    return this.create(false)
  }

  public static create(alive: boolean): Cell {
    return new Cell(alive)
  }

  private constructor(readonly isAlive: boolean) {}

  nextGeneration(neighbors: Cell[]): Cell {
    const hasTwoAliveNeighbors = neighbors.filter((cell) => cell.isAlive).length === 2
    return new Cell(hasTwoAliveNeighbors && this.isAlive)
  }
}
