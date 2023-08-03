import {Figure, FigureNames} from "./Figure";

// @ts-ignore
import blackFigure from "../../assets/Black-Rook.png";
// @ts-ignore
import whiteFigure from "../../assets/White-Rook.png";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        if (this.cell.isEmptyHorizontal(target))
            return true
        if (this.cell.isEmptyVertical(target))
            return true
        return false
    }
}
