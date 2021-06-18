import axios from "axios";
import {Board} from "../types/Board";
import {Space} from "../types/Space";
import {Game} from "../types/Game";
import {useState} from "react";
import {executionAsyncResource} from "async_hooks";

class GameApi{
    private static instance : GameApi;
    private readonly BACKEND_URL = "http://localhost:8080"




    private constructor() {
    }

    public static getInstance():GameApi{
        if(!GameApi.instance){
            GameApi.instance = new GameApi();
        }
        return GameApi.instance;
    }

    public getBoard(boardId : number){
        return axios.get<Board>(`${this.BACKEND_URL}/board/${boardId}`).then(value =>value.data)
    }

    public moveCurrentPlayer(boardId : number, space : Space){
        return axios.put(`${this.BACKEND_URL}/board/${boardId}/move`,space)
    }

    public switchPlayer(boardId : number){
        return axios.put(`${this.BACKEND_URL}/board/${boardId}/switchplayer`)
    }



    public addPlayer(boardId : number) {

        const player = {
            boardId: boardId,
            playerId: null,
            playerName: null,
            playerColor: null,
            x:null,
            y:null

        }

        return axios.post(`${this.BACKEND_URL}/board/${boardId}/player`, player).then(value => value.data)
    }



    public getGames() {
        return axios.get<Game[]>(`${this.BACKEND_URL}/game`).then(value =>value.data)
        //return GameApi.games
    }


    public createGame() {
        const game = {
            name: "Test Game",
            started: false,
            users: []
        }

        return axios.post<number>(`${this.BACKEND_URL}/game/`, game).then(value =>value.data)
    }


    public createBoard(game: Game, width: number, height: number) {

        const board = {
            boardId : game.id,
            boardName: "defaultBoard",
            width: width,
            height: height,
            spaceDtos: [],
            playerDtos: []
        }

        return axios.post<number> (`${this.BACKEND_URL}/board/`, board).then(value =>value.data)



    }
}

export default GameApi.getInstance()























