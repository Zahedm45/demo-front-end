import axios from "axios";
import {Board} from "../types/Board";
import {Space} from "../types/Space";
import {Game} from "../types/Game";

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
        return axios.post(`${this.BACKEND_URL}/board/${boardId}/player`)
    }

    private static games : Game[] =[
        {
            id: 1, name: "Board 1", started: false,
            users: [
                {playerId: 1, playerName: "player 1"},
                {playerId: 2, playerName: "player 2"}
            ]
        },

        {
            id: 2, name: "Board 2", started: false,
            users: [
                {playerId: 1, playerName: "player 1"},
                {playerId: 2, playerName: "player 2"}
            ]
        }

    ]

    public getGames() {
        return axios.get<Game[]>(`${this.BACKEND_URL}/game`).then(value =>value.data)
        //return GameApi.games
    }
}

export default GameApi.getInstance()