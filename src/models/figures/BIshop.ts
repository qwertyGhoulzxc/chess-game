import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
// @ts-ignore
import blackFigure from '../../assets/Black-Bishop.png'
// @ts-ignore
import whiteFigure from '../../assets/White-Bishop.png'

export class Bishop extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false
        if (this.cell.isEmptyDiagonal(target)){
            return true
        }
        return false
    }
}
