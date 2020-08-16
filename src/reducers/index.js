import { combineReducers } from "redux"
import gameReducers from "modules/game/reducers"

export default combineReducers({
    game: gameReducers
})