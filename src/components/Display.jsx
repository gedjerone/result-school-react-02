import PropTypes from "prop-types";
import {checkPlayer, resetGame} from "../game.js";
import {FaArrowRotateLeft} from "react-icons/fa6";

export const Display = ({winner, player, setTiles, setPlayer, setWinner}) => {
    return (
        <div className={'mb-4 flex flex-col items-center'}>
            {
                winner
                    ? (
                        <div className={'flex flex-row gap-4 items-center'}>
                            <button
                                className={'px-4 py-4 rounded-full'}
                                onClick={() => resetGame(setTiles, setPlayer, setWinner)}>
                                <FaArrowRotateLeft className={'hover:text-blue-600 text-2xl'}/>
                            </button>
                        <p
                            className={'font-normal text-2xl '.concat(winner === "X" ? 'text-red-600' : 'text-blue-600')}
                        > {winner !== "Draw" ? `Winner: ${winner}` : `Draw`} </p>
                    </div>
                    ) : (
                        <h2 className={'font-normal '.concat(player ? 'text-red-600' : 'text-blue-600')}>Turn: {checkPlayer(player)}</h2>
                    )
            }
        </div>
    )
}

Display.propTypes = {
    winner: PropTypes.string.isRequired,
    player: PropTypes.bool.isRequired,
    setTiles: PropTypes.func.isRequired,
    setPlayer: PropTypes.func.isRequired,
    setWinner: PropTypes.func.isRequired
}