import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export function todosReducer(state=initialState.todos,action){
    switch (action.type) {
        case actionTypes.GET_TODOS_SUCESS:
            return action.payload
        case actionTypes.ADD_TODO:
            let newtodo = action.payload
            return {newtodo, ...state}
        default:
            return state;
    }
}

// export function inputOnChangeReducer(state=initialState,action){
//     console.log("hit input reducer")
//     switch (action.type) {
//         case actionTypes.ONCHANGE_INPUT:
//             return Object.assign({}, state, {forminputvalue: action.payload})
//         default:
//             return state;
//     }
// }


// export function addTodo(state=initialState.todos,action){
//     switch (action.type) {
        
//         default:
//             break;
//     }
// }