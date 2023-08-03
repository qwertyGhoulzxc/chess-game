import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
// @ts-ignore
import blackFigure from "../../assets/Black-King.png";
// @ts-ignore
import whiteFigure from "../../assets/White-King.png";

export class King extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        if(dx ===1 && dy ==1)
            return true
        if((this.cell.y-1 ===target.y)&& (this.cell.x===target.x)
        || (this.cell.y+1 ===target.y)&& (this.cell.x===target.x)
        || (this.cell.y ===target.y)&& (this.cell.x+1===target.x)
        || (this.cell.y ===target.y)&& (this.cell.x-1===target.x)
        )
            return true
        return false
    }
}
