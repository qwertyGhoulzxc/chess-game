import {Figure, FigureNames} from "./Figure";
// @ts-ignore
import blackFigure from "../../assets/Black-Knight.png";
// @ts-ignore
import whiteFigure from "../../assets/White-Knight.png";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}
