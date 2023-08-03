import {FC, useEffect, useRef, useState} from 'react'
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface ITimer {
    currentPlayer: Player | null;
    restart: () => void
}

const Timer: FC<ITimer> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(180)
    const [whiteTime, setWhiteTime] = useState(180)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)
    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementalWhiteTimer : decrementalBlackTimer;
        timer.current = setInterval(callback, 1000)
    }

    function decrementalBlackTimer() {
        setBlackTime(prev => prev - 1)
    }

    function decrementalWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }

    const handelRestart=()=>{
        setWhiteTime(180)
        setBlackTime(180)
        restart()
    }

    return <div>
        <div>
            <button onClick={handelRestart}>restart game</button>
        </div>
        <h2>Black - {blackTime}</h2>
        <h2>White - {whiteTime}</h2>
    </div>
}

export default Timer
