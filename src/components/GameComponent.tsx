import {FunctionComponent, useContext, useState} from "react";
import {Game} from "../types/Game";
import GameContext from "../context/GameContext";
import GameApi from "../api/GameApi";

export type GameComponentProps = {
    game: Game
}

export const GameComponent: FunctionComponent<GameComponentProps> = ({game}) => {
    const {selectGame} = useContext(GameContext)
    const {addPlayer} = useContext(GameContext)

    const onClickGame = async () => {
        selectGame(game)
    }

    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(game.name)

    const onClickEdit = () => {
        setEdit(true)
        console.log("onClick Edit")
    }

    const onClickAddPlayer = () => {
        addPlayer(game)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        console.log("Game name: " + game.name + "; new name: " + event.target.value)
    }


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Game name: " + game.name + "; new name: " + name)
        setEdit(false)
    }


    return (
        <div>
            { !edit ?
                <div>
                    <b>{game.id}: {name}</b> &nbsp;
                    <button type="button" onClick={onClickAddPlayer}>Add Player</button>&nbsp;
                    <button type="button" onClick={onClickEdit}>Edit</button> &nbsp;
                    <button type="button" onClick={onClickGame}>Play</button>&nbsp;


                </div>
                :
                <form onSubmit={onSubmit}>
                    <input
                        name = "name"
                        type = "text"
                        value = {name}
                        required
                        onChange={onChange}
                    />
                    <input type="submit" value={"Save name" + (name !== game.name ? " (needed)" : "")} />
                </form>
            }

            <ul>
                {
                    game.users.map( (user, index) =>
                        <li>{user.playerName} (no function yet) </li>)
                }
            </ul>

        </div>
    )



    // return (
    //     <div onClick={onClick}>
    //         <h1>{game.id}: {game.name}</h1>
    //         <ul>
    //             {
    //             game.users.map( (user, index) =>
    //             <li>{ user.playerName } (no function yet) </li>)
    //             }
    //         </ul>
    //
    //     </div>
    // )
}