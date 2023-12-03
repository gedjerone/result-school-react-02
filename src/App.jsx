import {useState} from "react";
import {GameArea} from "./components/GameArea.jsx";
import {initials} from "./game.js";
import {Display} from "./components/Display.jsx";

const App = () => {

    const [tiles, setTiles] = useState(initials.tiles)
    const [player, setPlayer] = useState(initials.player)
    const [winner, setWinner] = useState(initials.winner)

    return (
    <>
     <div className={'flex flex-col p-4 justify-center items-center'}>
        <h1>Tic Tac Toe Game React</h1>
         <div className={'mt-8 bg-white px-12 py-8 rounded-2xl shadow-[0px_20px_20px_10px_#00000024] border-4'}>
             <Display
                 winner={winner}
                 player={player}
                 setTiles={setTiles}
                 setPlayer={setPlayer}
                 setWinner={setWinner}
             />
            <GameArea
                tiles={tiles}
                player={player}
                setTiles={setTiles}
                setPlayer={setPlayer}
                setWinner={setWinner}
                disabled={!!winner}
            />
         </div>
     </div>
    </>
  )
}

export default App