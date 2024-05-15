import { Neighbors } from "./Neighbors.js"

export class Cell {
  public static dead() {
    return this.create(false)
  }

  public static create(alive: boolean): Cell {
    return new Cell(alive)
  }

  private constructor(private readonly alive: boolean) {}

  isAlive() {
    return this.alive
  }

  nextGeneration(neighbors: Neighbors): Cell {
    const hasTwoAliveNeighbors = neighbors.aliveAmount() === 2
    return new Cell(hasTwoAliveNeighbors && this.alive)
  }

  toString() {
    return this.alive ? "+" : " "
  }
}
