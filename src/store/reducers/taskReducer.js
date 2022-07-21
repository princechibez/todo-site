import * as actionTypes from "../index";

let initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.parsedTask)
            }
        case actionTypes.SELECTED_TASKS:
            console.log(state.tasks)
            let selectedTaskIndices = action.taskIndices;
            let newTasks;
                    for (let eachTaskIndex of selectedTaskIndices) {
                        console.log(eachTaskIndex)
                        newTasks = state.tasks.splice(eachTaskIndex, 1)
                        console.log(newTasks)
                }
                // console.log(newTasks)
                // console.log(state.tasks)
            return {
                ...state,
                tasks: state.tasks
            }
        default:
            return state
    }
}
export default taskReducer;