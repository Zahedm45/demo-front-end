import {FunctionComponent, useContext} from "react";
import {Game} from "../types/Game";
import GameContext from "../context/GameContext";

export type GameComponentProps = {
    game: Game
}

export const GameComponent: FunctionComponent<GameComponentProps> = ({game}) => {
    const {selectGame} = useContext(GameContext)

    const onClick = async () => {
        selectGame(game)
    }

    return (
        <div onClick={onClick}>
            <h1>{game.Id}: {game.name}</h1>
            <ul>
                {
                game.user.map( (user, index) =>
                <li>{user.playerName} (no function yet) </li>)
                }
            </ul>

        </div>
    )
}