import { Board } from "./Board.js"
import { Logger } from "./Logger.js"
import { StateImporter } from "./StateImporter.js"

export class GameOfLife {
  private logger: Logger
  private board: Board

  constructor(logger: Logger, stateImporter: StateImporter) {
    this.logger = logger
    this.board = stateImporter.read()
  }
  tick() {
    this.board = this.board.nextGeneration()
    this.logger.log(this.board.toString())
  }
}
