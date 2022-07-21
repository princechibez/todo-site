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
        default:
            return state
    }
}
export default taskReducer;