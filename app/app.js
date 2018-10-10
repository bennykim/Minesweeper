'use strict'

import Minesweeper from './classes/Minesweeper'

const MinesweeperSize = 10
const NumberOfMines = 10

const minesweeperGame = new Minesweeper(MinesweeperSize, NumberOfMines) 

minesweeperGame.printField()