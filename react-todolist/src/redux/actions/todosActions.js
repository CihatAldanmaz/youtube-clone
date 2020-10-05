import * as actionTypes from "./actionTypes"

export function getTodosSuccess(todos) {
    return {
        type: actionTypes.GET_TODOS_SUCESS,
        payload: todos
    }
}

export function getTodos(){
    return function(dispatch){
        let url = "https://jsonplaceholder.typicode.com/users/1/todos"
        return fetch(url).then(resp => resp.json())
        .then(resp => dispatch(getTodosSuccess(resp)))
    }
}

// export function inputOnChange(e){
//     return function(dispatch){
//         return{
//             type:actionTypes.ONCHANGE_INPUT,
//             payload:dispatch(e.target.value)
//         }
//     }
   
// }

export function addTodo(e, input){
    e.preventDefault()

    return function(){
        
    }
    let newInput = {
        userId:1,
        id:100,
        title:input
    }

    return{
        type:actionTypes.ADD_TODO,
        payload:newInput
    }
}