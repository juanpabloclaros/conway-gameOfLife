import { describe, it, expect, vi } from "vitest"
import { GameOfLife } from "./GameOfLife.js"
import { Logger } from "./Logger.js"
import { StateImporter } from "./StateImporter.js"
import { Board } from "./Board.js"

describe("Game of life", () => {
  it("should work", () => {
    const logger: Logger = {
      log: vi.fn(),
    }
    const stateImporter: StateImporter = {
      read: () =>
        new Board([
          [false, false, false],
          [false, true, false],
          [false, false, false],
        ]),
    }
    const game = new GameOfLife(logger, stateImporter)

    game.tick()

    expect(logger.log).toHaveBeenCalledWith(`

   `)
  })
})
