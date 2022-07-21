import * as actionTypes from "../index";

let initialState = {
    displayMode: true
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MODE_CHANGER:
            return {
                ...state,
                displayMode: !state.displayMode
            }
        default:
            return state
    }
}

export default uiReducer;