'use strict'
import NearQuarters from './assets/NearQuarters'

class Minesweeper {

    constructor(size, mineCnt) {
        this.field = Array.from(Array(size), () => Array(size).fill(0))
        this.mines = Array.from(Array(mineCnt).fill({}))
        this.mineStyle = '@'
        this.nearQuarters = NearQuarters

        this.setMine(size, mineCnt)
        this.calcNearMine(size)
    }


    setMine(size, mineCnt) {
        let count = 0
        let isDuplicated = false 

        while (count < mineCnt) {
            let numX = Math.floor(Math.random() * size)
            let numY = Math.floor(Math.random() * size)

            for (let i = 0; i < count; i++) {
                if (this.mines[i].x == numX && this.mines[i].y == numY) {
                    isDuplicated = true
                }
            }

            if (!isDuplicated) {
                this.field[numX][numY] = this.mineStyle
                this.mines[count] = { 
                    x: numX,
                    y: numY
                }
                
                count++
            }

            isDuplicated = false
        }
    }


    calcNearMine(size) {
        for (let i = 0; i < this.mines.length; i++) {
            for (let j = 0; j < this.nearQuarters.length; j++) {
                let x = this.mines[i].x + this.nearQuarters[j].x
                let y = this.mines[i].y + this.nearQuarters[j].y
                let isInsideOfX = x >= 0 && x < size
                let isInsideOfY = y >= 0 && y < size

                if (isInsideOfX && isInsideOfY && this.field[x][y] != this.mineStyle) {
                    this.field[x][y]++
                }
            }
        }
    }

    
    printField() {
        console.log(this.field)
    }
}

export default Minesweeper