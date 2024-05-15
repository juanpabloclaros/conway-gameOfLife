import { Board } from "./Board.js"

export interface StateImporter {
  read(): Board
}
