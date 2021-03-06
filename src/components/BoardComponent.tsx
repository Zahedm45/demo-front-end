import React, { FunctionComponent, useContext } from "react";
import { SpaceComponent } from "./SpaceComponent";
import styles from "../styling/BoardComponent.module.scss"; //Import css module
import GameContext from "../context/GameContext";
/*
If the board component took any props/arguments they would be declared inside the type below
see the space component for an example.
 */

type BoardComponentProps = {};
const BoardComponent: FunctionComponent<BoardComponentProps> = () => {
  //{...} context is known as object destructuring
  const { board, loaded, unselectGame } = useContext(GameContext); //Hook form of Context.Consumer, used to access the context

  return (
      loaded ?
      <div>
          <div>
              <h3>{board.boardName + board.boardId} &nbsp; &nbsp;
                  <button type="button" onClick={unselectGame}>Game Lobby</button>
              </h3>

              {
                  board.playerDtos.map( (player, index) =>
                      <li>{player.playerName + "( " + player.playerColor + " )"} </li>)
              } &nbsp;

              {
                  <h4>Current player:  {board.currentPlayerDto?.playerName + "( " + board.currentPlayerDto?.playerColor + " )"}</h4>
              }

          </div>

        <div className={styles.container}>
          {
              board.spaceDtos.map((spaceArray, index) =>
              <div key={"spaceArray" + index}>
                {
                  spaceArray.map((space, index) =>
                  <SpaceComponent key={"space" + index} space={space}/>)
                }

              </div>
            )
          }

        </div>
      </div>
      :
      <div/>
  );
};

export default BoardComponent;




// /*Apply css on div below*/
// <div className={styles.container}>
//
//
//   {loaded ? (
//       board.spaceDtos.map((spaceArray, index) => (
//           <div key={"spaceArray" + index}>
//             {spaceArray.map((space, index) => (
//                 <SpaceComponent key={"space" + index} space={space} />
//             ))}
//           </div>
//       ))
//   ) : (
//       <h1>loading...</h1>
//   )}
// </div>