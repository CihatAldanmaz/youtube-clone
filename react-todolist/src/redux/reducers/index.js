import {combineReducers} from "redux"
import {todosReducer, inputOnChangeReducer} from "./todosReducer"


const rootReducer = combineReducers({
    todosReducer
})

export default rootReducer;