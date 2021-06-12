import React, {FunctionComponent, useContext} from "react";
import GameContext from "../context/GameContext";
import {GameComponent} from "./GameComponent";


type GamesComponentProps = {}

const GamesComponent: FunctionComponent<GamesComponentProps> = () => {

    const {games, loaded} = useContext(GameContext)

    return (
        !loaded ?
        <div>
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




