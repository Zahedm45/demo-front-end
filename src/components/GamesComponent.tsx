import React, {FunctionComponent, useContext} from "react";
import GameContext from "../context/GameContext";
import {GameComponent} from "./GameComponent";
import GameApi from "../api/GameApi";


type GamesComponentProps = {}

const GamesComponent: FunctionComponent<GamesComponentProps> = () => {

    const {games, loaded} = useContext(GameContext)
    const onClickCreateGame = async () =>{
        await GameApi.createGame()


    }

    return (
        !loaded ?
        <div>
            <p/><p/>
            <button type={"button"} onClick={onClickCreateGame}>Crete Game</button>
            <p/><p/>
            {
                games.map((game, index) =>
                    <div>
                        <GameComponent key={"game" + index} game={game}/>
                        <p/>&nbsp;<p/>
                    </div>
                )
            }
        </div>
        :
        <div/>
    )

}

export default GamesComponent




