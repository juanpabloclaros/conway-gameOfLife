import { join } from "path"

export class Board {
    
    private cells: boolean[][]
    constructor(cells: Array<Array<boolean>>){
        this.cells = cells
    }
    toString() {
        return this.cells.map(row => row.map(cell => cell ? "+":" ")).map(row => row.join("")).join("\n")
    }
    nextGeneration(): Board {
        return new Board(this.cells)
      }
}
