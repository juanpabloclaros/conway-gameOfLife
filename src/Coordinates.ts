export class Coordinates {
  constructor(
    private readonly i: number,
    private readonly j: number,
  ) {}

  static at(i: number, j: number) {
    return new Coordinates(i, j)
  }

  getNeighbors() {
    const neighborsCoordinates: Coordinates[] = []

    for (let i = this.i - 1; i <= this.i + 1; i++) {
      for (let j = this.j - 1; j <= this.j + 1; j++) {
        if (this.i === i && this.j === j) {
          continue
        }

        neighborsCoordinates.push(Coordinates.at(i, j))
      }
    }

    return neighborsCoordinates
  }

  extractFrom<T>(elements: Array<Array<T>>): T | undefined {
    const row = elements[this.i]

    if (!row) {
      return undefined
    }

    return row[this.j]
  }
}
