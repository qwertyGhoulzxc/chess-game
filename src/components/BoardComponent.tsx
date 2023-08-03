import React, {useEffect, useState} from 'react';
import {FC} from 'react'
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface IBoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer:Player | null;
    swapPlayer: ()=>void;
}

const BoardComponent: FC<IBoardProps> = ({setBoard, board,currentPlayer,swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    function handleClick(cell: Cell) {
        if(selectedCell && selectedCell !== cell &&selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
            swapPlayer()
        }
        else{
            if(cell.figure?.color === currentPlayer?.color)
            setSelectedCell(cell)
        }
    }

    useEffect(()=>{
        highlightCells()
    },[selectedCell])
    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return(
    <div>
        <h3>Current player {currentPlayer?.color}</h3>
    <div className={'board'}>
        {board.cells.map((row, index) =>
            <React.Fragment key={index}>
                {row.map(cell => <CellComponent
                    click={handleClick}
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    cell={cell}
                    key={cell.id}/>)}
            </React.Fragment>
        )}
    </div>
    </div>
    )
}

export default BoardComponent
