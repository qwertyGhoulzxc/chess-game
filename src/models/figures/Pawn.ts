import {Figure, FigureNames} from "./Figure";

// @ts-ignore
import blackFigure from "../../assets/Black-Pawn.png";
// @ts-ignore
import whiteFigure from "../../assets/White-Pawn.png";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Pawn extends Figure {
    isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2
///adasdasda
        if ((target.y === this.cell.y + direction || this.isFirstStep
                && (target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {

            if(target.y===this.cell.y+firstStepDirection && !this.cell.board.getCell(this.cell.x,this.cell.y+direction).isEmpty())
                return false
            return true
        }

        if (target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
            return true
        }
        return false
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false
    }
}
