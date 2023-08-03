import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Colors} from "./models/Colors";
import {Player} from "./models/Player";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer,setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer,setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer,setCurrentPlayer] = useState<Player | null>(null)
    useEffect(()=>{
        restart()
        setCurrentPlayer(whitePlayer)
    },[])

    function restart(){
        const newBoard = new Board();
        newBoard.initCells()
        setBoard(newBoard)
        newBoard.addFigures()
        setCurrentPlayer(whitePlayer)
    }

    function swaPlayer(){
        setCurrentPlayer(currentPlayer?.color ===Colors.WHITE? blackPlayer: whitePlayer)
    }

  return (
    <div className="App">
<Timer currentPlayer={currentPlayer} restart={restart}/>
      <BoardComponent board={board}
                      setBoard={setBoard}
                      currentPlayer={currentPlayer}
                      swapPlayer={swaPlayer}
      />
        <div>
            <LostFigures title="Black figures" figures={board.lostBlackFigures}/>
            <LostFigures title="White figures" figures={board.lostWhiteFigures}/>
        </div>
    </div>
  );
}
//поменять background фигурам на белый и черный

export default App;
