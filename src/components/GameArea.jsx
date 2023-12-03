import PropTypes from "prop-types";
import {Tile} from "./Tile.jsx";
import {checkPlayer, checkWinner} from "../game.js";

export const GameArea = ({tiles, setTiles, player, setPlayer, setWinner, disabled}) => {

    const setTile = (index) => {
        const arr = [...tiles]
        arr[index] = checkPlayer(player)
        setTiles(arr)
        setPlayer(!player)
        const winner = checkWinner(arr)
        winner && setWinner(winner)
    }

    return (
        <div className={'p-0.5 bg-black border-2 border-black gap-1 grid grid-cols-3'}>
            {tiles.map((value, i) => (
                <Tile
                    tile={value}
                    index={i}
                    setTile={setTile}
                    disabled={disabled}
                    key={i}
                />
            ))}
        </div>
    )
}


GameArea.propTypes = {
    tiles: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    setTiles: PropTypes.func.isRequired,
    player: PropTypes.bool.isRequired,
    setPlayer: PropTypes.func.isRequired,
    setWinner: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}